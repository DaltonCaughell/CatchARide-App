mainApp.controller("ChatController", function($rootScope, $scope, $http, $location, $state, $stateParams, crChat, crLoading, crUser) {

    $rootScope.scrollToBottom = true;

    $scope.ChatID = $stateParams.ChatID;

    crLoading.showWhile(crChat.Messages($scope.ChatID)).then(function(chat) {
        console.log(chat.Ride);
        $scope.messages = chat.Messages;
        $scope.ride = chat.Ride;
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
