mainApp.controller("SignUpController", function($scope, $http, $location, $state, Auth, crLoading) {

    $scope.errors = {};

    $scope.create = function(name, email, password, address, phone) {
        crLoading.showWhile(Auth.create(name, email, password, address, phone)).then(function(data) {
            $scope.errors = {};
            $state.go('caradd');
            $scope.$apply();
        }, function(error) {
            $scope.errors = {};
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

});
