mainApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('default', {
        url: "*path",
        templateUrl: "components/pages/index/index.html",
        controller: "IndexController",
        data: {
            requireLogin: true
        }
    });

});
