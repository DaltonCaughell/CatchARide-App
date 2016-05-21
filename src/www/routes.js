mainApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('entry', {
        url: "*entry",
        templateUrl: "components/pages/entry/entry.html",
        controller: "EntryController",
        data: {
            requireLogin: false
        }
    }).state('default', {
        url: "*path",
        templateUrl: "components/pages/index/index.html",
        controller: "IndexController",
        data: {
            requireLogin: true
        }
    });

});
