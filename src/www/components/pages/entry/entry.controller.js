mainApp.controller("EntryController", function($scope, $http, $location, $state, Auth, crLoading) {

    $scope.errors = {};

    $scope.login = function(email, password) {
        crLoading.showWhile(Auth.login(email, password)).then(function(user) {
            $scope.errors = {};
            $state.go('index');
            $scope.$apply();
        }, function(error) {
            $scope.errors = {};
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

    $scope.signUp = function() {
        $state.go('signup');
    };

});
