mainApp.controller("ScheduleController", function($scope, $http, $location, $state, crSchedule, crUser, crLoading) {

    $scope.user = {};
    $scope.rides = [];

    $scope.upcoming = true;

    crLoading.showWhile(crUser.Me()).then(function(user) {
        $scope.user = user;
        crLoading.showWhile(crSchedule.Me()).then(function(rides) {
            var date = new Date();
            rides.forEach(function(ride) {
                var rideDate = new Date(ride.DateTime);
                if (rideDate.getTime() < date.getTime()) {
                    ride.isOld = true;
                } else {
                    ride.isOld = false;
                }
                ride.time = rideDate.getTime();
            });
            console.log(rides);
            $scope.rides = rides;
        });
    });

});
