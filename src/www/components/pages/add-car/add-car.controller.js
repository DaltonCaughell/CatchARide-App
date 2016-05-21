mainApp.controller("AddCarController", function($scope, $http, $location, $state, Auth, crLoading, crUser) {

    $scope.errors = {};

    $scope.add = function(dlNumber, brand, model, seats, licensePlateNumber) {
        crUser.addCar(dlNumber, brand, model, seats, licensePlateNumber).then(function(data) {

        }, function(error) {

        });
    };

    $scope.skip = function() {
        $state.go('index');
    };

});
