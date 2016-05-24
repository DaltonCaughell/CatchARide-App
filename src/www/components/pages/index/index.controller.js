mainApp.controller("IndexController", function($scope, $http, $location, $state) {
    $scope.isDriver = false;

    $scope.isToSchool = false;
    $scope.isFromSchool = false;

    $scope.to = "";
    $scope.from = "";

    $scope.$watch('to', function() {
        if ($scope.to !== "" && $scope.to !== undefined && $scope.to !== "SCHOOL") {
            $scope.isToSchool = false;
            $scope.isFromSchool = true;
            $scope.from = "SCHOOL";
        } else if (($scope.to === "" || $scope.to === undefined) && $scope.from === "SCHOOL") {
            $scope.isToSchool = false;
            $scope.isFromSchool = false;
            $scope.from = "";
        }
    });

    $scope.$watch('from', function() {
        if ($scope.from !== "" && $scope.from !== undefined && $scope.from !== "SCHOOL") {
            $scope.isToSchool = true;
            $scope.isFromSchool = false;
            $scope.to = "SCHOOL";
        } else if (($scope.from === "" || $scope.from === undefined) && $scope.to === "SCHOOL") {
            $scope.isToSchool = false;
            $scope.isFromSchool = false;
            $scope.to = "";
        }
    });

});
