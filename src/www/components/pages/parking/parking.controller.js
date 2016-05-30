mainApp.controller("ParkingController", function($scope, $http, $location, $state, crParking, crLoading) {

    $scope.map = false;

    $scope.poll = true;

    var markers = [];

    $scope.reloadParking = function() {
        var deferred = Q.defer();
        crParking.All().then(function(lots) {
            $scope.lots = lots;
            if ($scope.map) {
                setTimeout(function() {
                    $scope.markMap(lots);
                }, 10);
            }
            $scope.$apply();
            deferred.resolve();
        }, function() {
            deferred.resolve();
        });
        return deferred.promise;
    };


    async.whilst(
        function() {
            return $scope.poll;
        },
        function(next) {
            $scope.reloadParking().then(function() {
                setTimeout(function() {
                    next();
                }, 1000 * 5);
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
                    zoom: 15,
                    mapTypeControlOptions: {
                        mapTypeIds: []
                    }
                });
            });
        }, 0);
    };

    $scope.$on('$destroy', function() {
        $scope.poll = false;
    });

    $scope.setNotify = function(LotID, Notify) {
        crLoading.showWhile(crParking.SetNotify(LotID, Notify)).then(function(notify) {
            crLoading.showWhile($scope.reloadParking());
        });
    };

});
