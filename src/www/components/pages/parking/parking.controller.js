mainApp.controller("ParkingController", function($scope, $http, $location, $state, crParking) {

    $scope.map = false;

    var markers = [];

    async.forever(
        function(next) {
            crParking.All().then(function(lots) {
                $scope.lots = lots;
                if ($scope.map) {
                    setTimeout(function() {
                        $scope.markMap(lots);
                    }, 1000);
                }
                $scope.$apply();
                setTimeout(function() {
                    next();
                }, 5 * 1000);
            }, function() {
                setTimeout(function() {
                    next();
                }, 5 * 1000);
            });
        },
        function(err) {

        });

    $scope.markMap = function(lots) {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];
        lots.forEach(function(lot) {
            markers.push(new google.maps.Marker({
                position: new google.maps.LatLng(lot.Lat, lot.Lon),
                map: crParkingMap,
                title: lot.Available.toString()
            }));
        });
    };

    $scope.showMap = function() {
        $scope.map = true;
        setTimeout(function() {
            app.infoMapReady().then(function() {
                crParkingMap = new google.maps.Map(document.getElementById('crParkingMap'), {
                    center: { lat: 47.658995, lng: -122.304483 },
                    zoom: 15
                });
            });
        }, 1000);
    };

});
