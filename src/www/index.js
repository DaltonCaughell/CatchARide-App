var mainApp = angular.module('mainApp', ['ngCordova', 'ui.router', 'angularModalService',
    'darthwade.loading', 'base64', 'ngMaterial', 'ngMessages', 'ngAnimate'

]);

mainApp.run(function(ModalService, $rootScope, $state, Auth, $animate) {

    $rootScope.Config = Config;

    $animate.enabled(false);

    setTimeout(function() {
        $animate.enabled(true);
    }, 200);

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

        var requireLogin = toState.data.requireLogin;

        var key = Auth.getAuth();

        if (requireLogin && (key === undefined || key === null || key === 0 || key === "")) {
            event.preventDefault();
            $state.go('entry');
        }

    });

});

mainApp.config(function($httpProvider, $mdThemingProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('grey')
        .backgroundPalette('grey')
        .warnPalette('red');
});

var app = {

    pDevReady: Q.defer(),
    pFSReady: Q.defer(),

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.pDevReady.resolve();
        app.pFSReady.resolve();
    },

    deviceReady: function() {
        return app.pDevReady.promise;
    },

    fileSystemReady: function() {
        return app.pFSReady.promise;
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
