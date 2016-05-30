mainApp.controller("ResetController", function($scope, $http, $location, $state, Auth, crLoading, $mdDialog, $stateParams) {

    $scope.errors = {};

    $scope.TempKey = $stateParams.TempKey;

    $scope.reset = function(pass, cPass) {
        if (pass !== cPass) {
            $scope.errors = {};
            $scope.errors.PasswordMatch = true;
        } else {
            crLoading.showWhile(Auth.ResetPassword(pass, $scope.TempKey)).then(function(data) {
                $scope.errors = {};
                $scope.$apply();
                $state.go('index');
            }, function(error) {
                $scope.errors = {};
                $scope.errors[error] = true;
                $scope.$apply();
            });
        }
    };

});
