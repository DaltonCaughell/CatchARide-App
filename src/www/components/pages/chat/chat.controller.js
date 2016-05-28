mainApp.controller("ChatController", function($rootScope, $scope, $http, $location, $state, $stateParams, crChat, crLoading, crUser) {

    $scope.poll = true;

    $scope.ChatID = $stateParams.ChatID;

    async.whilst(
        function() {
            return $scope.poll;
        },
        function(next) {
            crChat.Messages($scope.ChatID).then(function(chat) {
                console.log(chat);
                $scope.messages = chat.Messages;
                $scope.ride = chat.Ride;
                $scope.$apply();
                setTimeout(function() {
                    next();
                }, 5000);
            }, function() {
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

});
