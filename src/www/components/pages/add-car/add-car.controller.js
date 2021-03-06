mainApp.controller("AddCarController", function($scope, $http, $location, $state, Auth, crLoading, crUser) {

    $scope.errors = {};

    $scope.add = function(dlNumber, brand, model, seats, licensePlateNumber) {
        if (!isNaN(seats)) {
            crLoading.showWhile(crUser.addCar(dlNumber, brand, model, Number(seats), licensePlateNumber)).then(function(data) {
                $scope.errors = {};
                $state.go('index');
                $scope.$apply();
            }, function(error) {
                $scope.errors = {};
                $scope.errors[error] = true;
                $scope.$apply();
            });
        } else {
            $scope.errors = {};
            $scope.errors.Seats = true;
        }
    };

    $scope.skip = function() {
        $state.go('index');
    };

});
