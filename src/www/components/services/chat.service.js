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

    service.Rate = function(MessageID, RatingID, Rating) {
        var deferred = Q.defer();

        $http.put(Config.API.Endpoints.Chat.Rate + "/" + MessageID + "/" + RatingID + "/" + Rating).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.RequestCash = function(ChatID, amount) {
        var deferred = Q.defer();

        $http.post(Config.API.Endpoints.Chat.RequestCash + "/" + ChatID, {
            Amount: amount
        }).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.CashRequestAccept = function(MessageID) {
        var deferred = Q.defer();

        $http.put(Config.API.Endpoints.Chat.CashRequestAccept + "/" + MessageID).then(function(res) {
            var data = res.data;
            deferred.resolve(data);
        }, function(res) {
            var data = res.data;
            deferred.reject('internal_error');
        });

        return deferred.promise;
    };

    service.CashRequestReject = function(MessageID) {
        var deferred = Q.defer();

        $http.put(Config.API.Endpoints.Chat.CashRequestReject + "/" + MessageID).then(function(res) {
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
