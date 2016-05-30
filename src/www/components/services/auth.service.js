mainApp.factory('Auth', function($http, $loading) {

    var service = {};

    var invalidAuth = false;

    service.logOut = function() {
        localStorage.removeItem("authKey");
    };

    service.setAuth = function(authKey) {
        localStorage.setItem("authKey", authKey);
    };

    service.getAuth = function() {
        return localStorage.getItem("authKey");
    };

    service.login = function(email, password) {

        var deferred = Q.defer();

        var p = $http.post(Config.API.Endpoints.Auth.Login, {
            Email: email,
            Password: password
        });

        p.then(function(res) {
            var data = res.data;
            service.setAuth(data.Session.ApiKey);
            deferred.resolve(data);
        }, function(res) {
            if (res.status === 422) {
                deferred.reject('incorrect_login');
            } else {
                deferred.reject('internal_error');
            }
        });

        return deferred.promise;
    };

    service.create = function(name, email, password, address, phone) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.Auth.Create, {
            Email: email,
            Password: password,
            Name: name,
            Address: address,
            Phone: phone
        }).then(function(res) {
            var data = res.data;
            service.setAuth(data.Session.ApiKey);
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

    service.ChangePassword = function(password) {

        var deferred = Q.defer();

        var p = $http.post(Config.API.Endpoints.Auth.Password, {
            Password: password
        });

        p.then(function(res) {
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

    service.ForgotPassword = function(email) {

        var deferred = Q.defer();

        var p = $http.post(Config.API.Endpoints.Auth.Forgot, {
            Email: email
        });

        p.then(function(res) {
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

    service.ResetPassword = function(pass, TempKey) {

        var deferred = Q.defer();

        var p = $http.post(Config.API.Endpoints.Auth.Reset, {
            Password: pass,
            TempKey: TempKey
        });

        p.then(function(res) {
            var data = res.data;
            service.setAuth(data.Session.ApiKey);
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
