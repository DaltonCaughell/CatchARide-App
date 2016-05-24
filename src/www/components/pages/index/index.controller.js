mainApp.controller("IndexController", function($scope, $http, $location, $state, $mdDialog) {
    $scope.isDriver = false;

    $scope.isToSchool = false;
    $scope.isFromSchool = false;

    $scope.to = "";
    $scope.from = "";

    $scope.date = null;
    $scope.time = null;

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

    $scope.setDate = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: 'components/dialogs/date/date.html',
            controller: 'DateDialogController',
            locals: { date: $scope.date }
        }).then(function(date) {
            $scope.date = date;
        }, function() {

        });
    };

    $scope.setTime = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: 'components/dialogs/time/time.html',
            controller: 'TimeDialogController',
            locals: { time: $scope.time }
        }).then(function(time) {
            console.log(time);
            //$scope.date = date;
        }, function() {

        });
    };

});
