mainApp.factory('AuthInterceptor', ['$injector', '$base64', '$q', function($injector, $base64, $q) {
    var injector = {
        request: function(config) {
            var deferred = Q.defer();
            if (config.url.indexOf(Config.API.Base) !== -1) {
                var Auth = $injector.get('Auth');
                var key = Auth.getAuth();
                if (key !== undefined && key !== null && key !== "") {
                    config.headers['X-API-KEY'] = key;
                }
                deferred.resolve(config);
            } else {
                deferred.resolve(config);
            }
            return deferred.promise;
        },
        response: function(response) {
            return response;
        },
        responseError: function(response) {
            if (response.status === 403) {
                var Auth = $injector.get('Auth');
                Auth.logOut();
            }
            return $q.reject(response);
        }
    };
    return injector;
}]);
