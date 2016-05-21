mainApp.controller("AddCarController", function($scope, $http, $location, $state, Auth, crLoading) {

    $scope.errors = {};

    $scope.add = function() {

    };

    $scope.skip = function() {
        $state.go('index');
    };

});
