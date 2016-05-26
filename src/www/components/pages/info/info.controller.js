mainApp.controller("InfoController", function($scope, $http, $location, $state, $stateParams, crSchedule, crUser, crLoading) {

    $scope.RideID = $stateParams.RideID;

    $scope.user = {};
    $scope.ride = {};

    crLoading.showWhile(crUser.Me()).then(function(user) {
        $scope.user = user;
        crLoading.showWhile(crSchedule.Ride($scope.RideID)).then(function(ride) {
            console.log(ride);
            $scope.ride = ride;
            setTimeout(function() {
                app.infoMapReady().then(function() {
                    crInfoMap = new google.maps.Map(document.getElementById('crInfoMap'), {
                        center: { lat: ride.FromLat, lng: ride.FromLon },
                        zoom: 12,
                        mapTypeControlOptions: {
                            mapTypeIds: []
                        }
                    });

                    var fromMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(ride.FromLat, ride.FromLon),
                        map: crInfoMap,
                        title: 'From'
                    });

                    var toMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(ride.ToLat, ride.ToLon),
                        map: crInfoMap,
                        title: 'To'
                    });
                });
            }, 1000);
            $scope.dirUrl = "https://www.google.com/maps/dir/Current+Location/" + ride.ToLat + "," + ride.ToLon;
        });
    });

    $scope.maps = function(url) {
        console.log(url);
        window.open(url, '_blank');
    };

});
