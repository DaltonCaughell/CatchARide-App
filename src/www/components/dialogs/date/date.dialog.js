mainApp.controller("DateDialogController", function($scope, $http, $location, $state, Auth, crLoading, $mdDialog) {

    $scope.close = function() {
        $mdDialog.hide($scope.date);
    };

});
