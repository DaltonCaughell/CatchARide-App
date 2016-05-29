mainApp.controller("PasswordDialogController", function($scope, $http, $location, $state, Auth, crLoading, $mdDialog) {

    $scope.errors = {};

    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.set = function(pass, cPass) {
        if (pass !== cPass) {
            $scope.errors = {};
            $scope.errors.PasswordMatch = true;
        } else {
            crLoading.showWhile(Auth.ChangePassword(pass)).then(function(data) {
                $scope.errors = {};
                $scope.close();
                $scope.$apply();
            }, function(error) {
                $scope.errors = {};
                $scope.errors[error] = true;
                $scope.$apply();
            });
        }
    };

});
