mainApp.controller("EditCarDialogController", function($scope, $http, $location, $state, Auth, crLoading, $mdDialog, car, crUser) {

    $scope.errors = {};

    if (car === undefined || car === null) {
        car = {};
        car.ID = 0;
    }

    $scope.car = car;

    console.log(car);

    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.edit = function(car) {
        if (!isNaN(car.Seats)) {
            car.Seats = Number(car.Seats);
            crLoading.showWhile(crUser.UpdateCar(car)).then(function(car) {
                $scope.car = car;
                $scope.errors = {};
                $scope.close();
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

});
