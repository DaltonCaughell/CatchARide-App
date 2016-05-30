mainApp.controller("IndexController", function($scope, $http, $location, $state, $mdDialog, crSchedule, crLoading) {

    $scope.errors = {};

    $scope.isDriver = false;

    $scope.isToSchool = false;
    $scope.isFromSchool = false;

    $scope.params = crSchedule.GetParams();

    $scope.$watch('params.To', function() {
        if ($scope.params.To !== "" && $scope.params.To !== undefined && $scope.params.To !== "SCHOOL") {
            $scope.isToSchool = false;
            $scope.isFromSchool = true;
            $scope.params.From = "SCHOOL";
        } else if (($scope.params.To === "" || $scope.params.To === undefined) && $scope.params.From === "SCHOOL") {
            $scope.isToSchool = false;
            $scope.isFromSchool = false;
            $scope.params.From = "";
        }
    });

    $scope.$watch('params.From', function() {
        if ($scope.params.From !== "" && $scope.params.From !== undefined && $scope.params.From !== "SCHOOL") {
            $scope.isToSchool = true;
            $scope.isFromSchool = false;
            $scope.params.To = "SCHOOL";
        } else if (($scope.params.From === "" || $scope.params.From === undefined) && $scope.params.To === "SCHOOL") {
            $scope.isToSchool = false;
            $scope.isFromSchool = false;
            $scope.params.To = "";
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
