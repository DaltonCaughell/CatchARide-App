mainApp.controller("DriversController", function($scope, $http, $location, $state, $stateParams, crLoading, crUser, crSchedule) {

    $scope.SearchID = $stateParams.SearchID;

    $scope.rides = [];
    $scope.user = {};
    $scope.search = {};

    crLoading.showWhile(crUser.Me()).then(function(user) {
        $scope.user = user;
        crLoading.showWhile(crSchedule.Available($scope.SearchID)).then(function(data) {
            console.log(data);
            $scope.rides = data.Rides;
            $scope.search = data.Search;
        });
    });

    $scope.join = function(RideID) {
        crLoading.showWhile(crSchedule.Join(RideID)).then(function(data) {
            console.log(data);
            $state.go('chat', { 'ChatID': data.Ride.ChatID });
        });
    };

});
