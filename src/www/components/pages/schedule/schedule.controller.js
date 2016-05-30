mainApp.controller("ScheduleController", function($scope, $http, $location, $state, crSchedule, crUser, crLoading, $mdDialog, $stateParams) {

    $scope.user = {};
    $scope.rides = [];

    $scope.hasUpcoming = false;
    $scope.hasPast = false;

    $scope.poll = true;

    $scope.upcoming = ($stateParams.upcoming === undefined || $stateParams.upcoming === null) ? true : ($stateParams.upcoming === 'true') ? true : false;

    $scope.reload = function() {
        var deferred = Q.defer();
        crUser.Me().then(function(user) {
            $scope.user = user;
            crSchedule.Me().then(function(rides) {
                $scope.hasUpcoming = false;
                $scope.hasPast = false;
                var date = new Date();
                rides.forEach(function(ride) {
                    var rideDate = new Date(ride.DateTime);
                    if (rideDate.getTime() < date.getTime() || ride.Canceled || ride.Left) {
                        ride.isOld = true;
                        $scope.hasPast = true;
                    } else {
                        $scope.hasUpcoming = true;
                        ride.isOld = false;
                    }
                    ride.time = rideDate.getTime();
                });
                console.log(rides);
                $scope.rides = rides;
                deferred.resolve();
            }, function() {
                deferred.resolve();
            });
        }, function() {
            deferred.resolve();
        });
        return deferred.promise;
    };

    crLoading.showWhile($scope.reload()).then(function() {
        async.whilst(
            function() {
                return $scope.poll;
            },
            function(next) {
                $scope.reload().then(function() {
                    setTimeout(function() {
                        next();
                    }, 1000 * 5);
                });
            },
            function(err) {

            });
    });


    $scope.cancel = function(RideID) {
        var cancelRide = function() {
            crLoading.showWhile(crSchedule.Leave(RideID)).then(function() {
                $scope.reload();
            });
        };
        var ride = _.find($scope.rides, function(ride) {
            return Number(RideID) === Number(ride.ID);
        });
        if (ride !== undefined) {
            var now = new Date();
            now.setDate(now.getDate() + 1);
            var rideDate = new Date(ride.DateTime);
            if (ride.UserID === $scope.user.ID && (rideDate.getTime() + (1000 * 60 * 60 * 24)) > now.getTime()) {
                $mdDialog.show($mdDialog.confirm({
                    title: "You are about to lose reputation!",
                    textContent: "Canceling less than 24 hours before a ride will result in a zero star rating!",
                    ok: "I UNDERSTAND",
                    cancel: "CANCEL"
                })).then(function() {
                    cancelRide();
                });
            } else {
                $mdDialog.show($mdDialog.confirm({
                    title: "This may inconvenience other users!",
                    textContent: "Are you sure you want to cancel this ride?",
                    ok: "I UNDERSTAND",
                    cancel: "CANCEL"
                })).then(function() {
                    cancelRide();
                });
            }
        }
    };

    $scope.$on('$destroy', function() {
        $scope.poll = false;
    });

    $scope.chat = function(id) {
        $state.go("chat", { "ChatID": id });
    };

});
