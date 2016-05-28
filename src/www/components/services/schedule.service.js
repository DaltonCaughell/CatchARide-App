mainApp.factory('crSchedule', function($http, $loading) {

    var service = {};

    service.Search = function(isDriver, from, to, date) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.Schedule.Search, {
            IsDriver: isDriver,
            From: from,
            To: to,
            DateTime: date
        }).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            if (res.status === 422) {
                if (data.length > 0) {
                    deferred.reject(data[0].fieldNames[0]);
                } else {
                    deferred.reject('internal_error');
                }
            } else {
                deferred.reject('internal_error');
            }
        });

        return deferred.promise;
    };

    service.Me = function() {
        var deferred = Q.defer();

        $http.get(Config.API.Endpoints.Schedule.Me).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.Ride = function(RideID) {
        var deferred = Q.defer();

        $http.get(Config.API.Endpoints.Schedule.Ride + "/" + RideID).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.Available = function(SearchID) {
        var deferred = Q.defer();

        $http.get(Config.API.Endpoints.Schedule.Available + "/" + SearchID).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.Join = function(RideID, SearchID) {
        var deferred = Q.defer();
        $http.get(Config.API.Endpoints.Schedule.Join + "/" + RideID).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });
        return deferred.promise;
    };

    service.Accept = function(RideID, MessageID) {
        var deferred = Q.defer();
        $http.get(Config.API.Endpoints.Schedule.AcceptPassenger + "/" + RideID + "/" + MessageID).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });
        return deferred.promise;
    };

    service.Reject = function(RideID, MessageID) {
        var deferred = Q.defer();
        $http.get(Config.API.Endpoints.Schedule.RejectPassenger + "/" + RideID + "/" + MessageID).then(function(res) {
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
