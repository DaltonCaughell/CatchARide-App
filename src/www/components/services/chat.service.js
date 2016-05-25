mainApp.factory('crChat', function($http, $loading) {

    var service = {};

    service.Messages = function(ChatID) {
        var deferred = Q.defer();

        $http.get(Config.API.Endpoints.Chat.Messages + "/" + ChatID).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.Send = function(ChatID, message) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.Chat.Send + "/" + ChatID, {
            Message: message
        }).then(function(res) {
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
