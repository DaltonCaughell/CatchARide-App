mainApp.controller("IndexController", function($scope, $http, $location, $state, $mdDialog, crSchedule, crLoading) {

    $scope.errors = {};

    $scope.isDriver = false;

    $scope.isToSchool = false;
    $scope.isFromSchool = false;

    $scope.to = "";
    $scope.from = "";

    $scope.date = new Date();
    $scope.time = new Date();

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

    $scope.search = function(from, to, date, time) {
        var isDriver = $scope.isDriver;
        crLoading.showWhile(crSchedule.Search(isDriver, from, to, new Date(
            date.getFullYear(), date.getMonth(), date.getDate(),
            time.getHours(), time.getMinutes(), time.getSeconds()))).then(function(data) {
            if (isDriver) {
                $scope.errors = {};
                $state.go('chat', { "ChatID": data.ChatID });
            } else {
                $state.go('drivers', { 'SearchID': data.ID });
            }
            $scope.$apply();
        }, function(error) {
            $scope.errors = {};
            $scope.errors[error] = true;
            $scope.$apply();
        });
    };

});
