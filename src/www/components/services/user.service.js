mainApp.factory('crUser', function($http) {

    var service = {};

    service.addCar = function(dlNumber, brand, model, seats, licensePlateNumber) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.User.AddCar, {
            DLNumber: dlNumber,
            Brand: brand,
            CarModel: model,
            Seats: seats,
            LicensePlateNumber: licensePlateNumber
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

        $http.get(Config.API.Endpoints.User.Me).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.Update = function(user) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.User.Update, user).then(function(res) {
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

    service.UpdateCar = function(car) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.User.UpdateCar, car).then(function(res) {
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
