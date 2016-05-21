mainApp.controller("EntryController", function($scope, $http, $location, $state, Auth) {

    $scope.errors = {};

    $scope.login = function(email, password) {
        Auth.login(email, password).then(function(user) {
            $scope.errors = {};
            $state.go('index');
        }, function(error) {
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

    $scope.signUp = function() {
        $state.go('signup');
    };

});
