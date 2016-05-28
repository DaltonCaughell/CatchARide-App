mainApp.controller("InfoController", function($scope, $http, $location, $state, $stateParams, crSchedule, crUser, crLoading) {

    $scope.RideID = $stateParams.RideID;

    $scope.user = {};
    $scope.ride = {};
    $scope.ride.Passengers = [];

    $scope.markers = [];

    crLoading.showWhile(crUser.Me()).then(function(user) {
        $scope.user = user;
        crLoading.showWhile(crSchedule.Ride($scope.RideID)).then(function(ride) {
            console.log(ride);
            $scope.ride = ride;
            setTimeout(function() {
                app.infoMapReady().then(function() {
                    crInfoMap = new google.maps.Map(document.getElementById('crInfoMap'), {
                        center: { lat: ride.FromLat, lng: ride.FromLon },
                        zoom: 9,
                        mapTypeControlOptions: {
                            mapTypeIds: []
                        }
                    });

                    $scope.markers.push(new google.maps.Marker({
                        position: new google.maps.LatLng(ride.FromLat, ride.FromLon),
                        map: crInfoMap,
                        title: 'From'
                    }));

                    $scope.markers.push(new google.maps.Marker({
                        position: new google.maps.LatLng(ride.ToLat, ride.ToLon),
                        map: crInfoMap,
                        title: 'To'
                    }));

                    $scope.dirUrl = "https://www.google.com/maps/dir/Current+Location";

                    ride.Passengers.forEach(function(p) {
                        $scope.markers.push(new google.maps.Marker({
                            position: new google.maps.LatLng((p.Details.To === 'SCHOOL') ? p.Details.ToLat : p.Details.ToLon,
                                (p.Details.To !== 'SCHOOL') ? p.Details.FromLat : p.Details.FromLon),
                            map: crInfoMap,
                            title: p.User.Name
                        }));
                        if (p.Details.To === 'SCHOOL') {
                            $scope.dirUrl += "/" + p.Details.FromLat + "," + p.Details.FromLon;
                        } else {
                            $scope.dirUrl += "/" + p.Details.ToLat + "," + p.Details.ToLon;
                        }
                    });

                    $scope.dirUrl += "/" + ride.ToLat + "," + ride.ToLon;
                });
            }, 10);
        });
    });

    $scope.maps = function(url) {
        console.log(url);
        window.open(url, '_blank');
    };

});
