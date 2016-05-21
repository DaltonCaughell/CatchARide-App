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
        /*$loading.start(Config.DOM.LoadingOverlay);

        var p = $http.post(Config.API.Endpoints.Auth.Login, {
            email: email,
            password: password,
            tabletId: 0
        });

        p.then(function(data) {
            $loading.finish(Config.DOM.LoadingOverlay);
            service.setAuth(data.data.userID, data.data.session.key, data.data.companyID);
            //Sync.TimeBomb(true);
        }, function() {
            $loading.finish(Config.DOM.LoadingOverlay);
        });

        return p;*/

    };

    service.forgot = function(email) {
        /*$loading.start(Config.DOM.LoadingOverlay);

        var p = $http.post(Config.API.Endpoints.Auth.Forgot, {
            email: email
        });

        p.then(function() {
            $loading.finish(Config.DOM.LoadingOverlay);
        }, function() {
            $loading.finish(Config.DOM.LoadingOverlay);
        });

        return p;*/
    };

    service.reset = function(password) {
        /*$loading.start(Config.DOM.LoadingOverlay);

        var p = $http.post(Config.API.Endpoints.Auth.Reset, {
            userId: localStorage.getItem("userID"),
            password: password
        });

        p.then(function(data) {
            $loading.finish(Config.DOM.LoadingOverlay);
            //Sync.TimeBomb(true);
        }, function() {
            $loading.finish(Config.DOM.LoadingOverlay);
        });

        return p;*/
    };

    return service;

});
