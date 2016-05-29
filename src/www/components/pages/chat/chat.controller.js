mainApp.controller("ChatController", function($rootScope, $scope, $http, $location, $state, $stateParams, crChat, crLoading, crUser, crSchedule) {

    $scope.poll = true;

    $scope.ChatID = $stateParams.ChatID;

    $scope.reloadChat = function() {
        var deferred = Q.defer();
        crChat.Messages($scope.ChatID).then(function(chat) {
            $scope.messages = chat.Messages;
            $scope.ride = chat.Ride;
            $scope.$apply();
            deferred.resolve();
        }, function() {
            deferred.resolve();
        });
        return deferred.promise;
    };

    async.whilst(
        function() {
            return $scope.poll;
        },
        function(next) {
            $scope.reloadChat().then(function() {
                setTimeout(function() {
                    next();
                }, 5000);
            });
        },
        function(err) {

        });

    $scope.$on('$destroy', function() {
        $scope.poll = false;
    });

    crLoading.showWhile(crUser.Me()).then(function(user) {
        $scope.user = user;
    });

    $scope.send = function(message) {
        $scope.textMessage = "";
        crChat.Send($scope.ChatID, message).then(function(message) {
            $scope.messages.push(message);
            $scope.$apply();
        });
    };

    $scope.accept = function(RideID, MessageID) {
        crLoading.showWhile(crSchedule.Accept(RideID, MessageID)).then(function() {
            crLoading.showWhile($scope.reloadChat());
        });
    };

    $scope.reject = function(RideID, MessageID) {
        crLoading.showWhile(crSchedule.Reject(RideID, MessageID)).then(function() {
            crLoading.showWhile($scope.reloadChat());
        });
    };

    $scope.rate = function(message, rating) {
        console.log(rating);
        crLoading.showWhile(crChat.Rate(message.ID, message.Rating.ID, rating)).then(function(data) {
            message.Rating = data;
        });
    };

});
