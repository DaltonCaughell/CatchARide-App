mainApp.controller("ParkingController", function($scope, $http, $location, $state, crParking) {

    async.forever(
        function(next) {
            crParking.All().then(function(lots) {
                $scope.lots = lots;
                $scope.$apply();
                setTimeout(function() {
                    next();
                }, 5 * 1000);
            }, function() {
                setTimeout(function() {
                    next();
                }, 5 * 1000);
            });
        },
        function(err) {

        });

});
