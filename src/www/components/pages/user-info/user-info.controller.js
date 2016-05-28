mainApp.controller("UserInfoController", function($scope, $http, $location, $state, $stateParams, crSchedule, crUser, crLoading) {

    $scope.UserID = $stateParams.UserID;
    $scope.RideID = $stateParams.RideID;

    $scope.info = {};
    $scope.markers = [];

    crLoading.showWhile(crSchedule.Rider($scope.RideID, $scope.UserID)).then(function(info) {
        console.log(info);
        app.infoMapReady().then(function() {
            crUserInfoMap = new google.maps.Map(document.getElementById('crUserInfoMap'), {
                center: { lat: info.FromLat, lng: info.FromLon },
                zoom: 9,
                mapTypeControlOptions: {
                    mapTypeIds: []
                }
            });

            $scope.markers.push(new google.maps.Marker({
                position: new google.maps.LatLng(info.FromLat, info.FromLon),
                map: crUserInfoMap,
                title: 'From'
            }));

            $scope.markers.push(new google.maps.Marker({
                position: new google.maps.LatLng(info.ToLat, info.ToLon),
                map: crUserInfoMap,
                title: 'To'
            }));
        });
        $scope.info = info;
    });

});
