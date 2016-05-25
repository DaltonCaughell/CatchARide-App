mainApp.factory('crSchedule', function($http, $loading) {

    var service = {};

    service.Search = function(isDriver, from, to, date) {
        var deferred = Q.defer();

        console.log(isDriver);

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

    return service;

});
