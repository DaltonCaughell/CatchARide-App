mainApp.controller("UserInfoController", function($scope, $http, $location, $state, $stateParams, crSchedule, crUser, crLoading) {

    $scope.UserID = $stateParams.UserID;
    $scope.RideID = $stateParams.RideID;

    $scope.info = {};

    crLoading.showWhile(crSchedule.Rider($scope.RideID, $scope.UserID)).then(function(info) {
        console.log(info);
        $scope.info = info;
    });

});
