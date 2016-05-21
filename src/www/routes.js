mainApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('signup', {
            url: "/signup",
            templateUrl: "components/pages/sign-up/sign-up.html",
            controller: "SignUpController",
            data: {
                requireLogin: false
            }
        })
        .state('index', {
            url: "/index",
            templateUrl: "components/pages/index/index.html",
            controller: "IndexController",
            data: {
                requireLogin: true
            }
        }).state('entry', {
            url: "/entry",
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
