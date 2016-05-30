mainApp.factory('crParking', function($http, $loading) {

    var service = {};

    service.All = function() {
        var deferred = Q.defer();

        $http.get(Config.API.Endpoints.Parking.All).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.SetNotify = function(LotID, Notify) {
        var deferred = Q.defer();

        $http.put(Config.API.Endpoints.Parking.Notify + "/" + LotID + "/" + Boolean(Notify).toString()).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    return service;

});
