mainApp.controller("ChatController", function($scope, $http, $location, $state, $stateParams, crChat, crLoading, crUser) {

    $scope.ChatID = $stateParams.ChatID;

    crLoading.showWhile(crChat.Messages($scope.ChatID)).then(function(messages) {
        console.log(messages);
        $scope.messages = messages;
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
