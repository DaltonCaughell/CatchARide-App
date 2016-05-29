mainApp.controller("SettingsController", function($scope, $http, $location, $state, crLoading, crUser, $mdDialog) {

    $scope.errors = {};

    $scope.eTimes = 5;

    $scope.user = {};

    crLoading.showWhile(crUser.Me()).then(function(user) {
        console.log(user);
        $scope.user = user;
    });

    $scope.eMode = function() {
        if ($scope.eTimes === 1) {
            alert = $mdDialog.alert()
                .title('Emergency Mode Active!')
                .textContent('Transmitting location to local authorities!')
                .ok('Close');
            $mdDialog
                .show(alert)
                .finally(function() {
                    alert = undefined;
                });
        } else {
            $scope.eTimes--;
        }
    };

    $scope.changePassword = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: 'components/dialogs/password/password.html',
            controller: 'PasswordDialogController'
        });
    };

    $scope.update = function(user) {
        crLoading.showWhile(crUser.Update(user)).then(function(data) {
            $scope.errors = {};
            $scope.$apply();
        }, function(error) {
            $scope.errors = {};
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

    $scope.payment = function() {
        alert = $mdDialog.alert()
            .title('Edit Payment')
            .textContent('For Demo Purposes Payment Has Been Disabled')
            .ok('Close');
        $mdDialog
            .show(alert)
            .finally(function() {
                alert = undefined;
            });
    };

    $scope.editCar = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: 'components/dialogs/edit-car/edit-car.html',
            controller: 'EditCarDialogController',
            locals: { car: $scope.user.Cars[0] }
        });
    };

});
