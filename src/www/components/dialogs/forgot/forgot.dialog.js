mainApp.controller("ForgotDialogController", function($scope, $http, $location, $state, Auth, crLoading, $mdDialog) {

    $scope.errors = {};

    $scope.showEmail = true;
    $scope.user = {};
    $scope.user.Email = "";

    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.sendForgot = function() {
        crLoading.showWhile(Auth.ForgotPassword($scope.user.Email)).then(function(data) {
            $scope.errors = {};
            $scope.showEmail = false;
            $scope.$apply();
        }, function(error) {
            $scope.errors = {};
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

});
