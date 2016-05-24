mainApp.controller("ParkingController", function($scope, $http, $location, $state, crParking) {

    crParking.All().then(function(lots) {
        $scope.lots = lots;
    });

});
