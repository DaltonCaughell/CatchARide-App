mainApp.controller("SignUpController", function($scope, $http, $location, $state, Auth) {

    $scope.errors = {};

    $scope.create = function(name, email, password, address, phone) {
        Auth.create(name, email, password, address, phone).then(function(data) {
            $scope.errors = {};
            $state.go('caradd');
        }, function(error) {
            $scope.errors = {};
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

});
