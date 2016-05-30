var mainApp = angular.module('mainApp', ['ngCordova', 'ui.router', 'angularModalService',
    'darthwade.loading', 'base64', 'ngMaterial', 'ngMessages', 'ngAnimate', 'mdPickers', 'luegg.directives'

]);

mainApp.run(function(ModalService, $rootScope, $state, Auth, $animate) {

    $rootScope.Config = Config;
    $rootScope.crLoadingOn = false;

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

    $rootScope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    $rootScope.logout = function() {
        Auth.logOut();
        $state.go("entry");
    };

});

mainApp.config(function($httpProvider, $mdThemingProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('AuthInterceptor');
    //Remove the header used to identify ajax call that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('light-blue')
        .backgroundPalette('grey')
        .warnPalette('red');
});

mainApp.directive('focusMe', function($timeout, $parse) {
    return {
        //scope: true,   // optionally create a child scope
        link: function(scope, element, attrs) {
            var model = $parse(attrs.focusMe);
            scope.$watch(model, function(value) {
                console.log('value=', value);
                if (value === true) {
                    $timeout(function() {
                        element[0].focus();
                    });
                }
            });
            // to address @blesh's comment, set attribute value to 'false'
            // on blur event:
            element.bind('blur', function() {
                console.log('blur');
                scope.$apply(model.assign(scope, false));
            });
        }
    };
});

var app = {

    pDevReady: Q.defer(),
    pFSReady: Q.defer(),
    pInfoMapReady: Q.defer(),

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

    infoMapReady: function() {
        return app.pInfoMapReady.promise;
    },

    fileSystemReady: function() {
        return app.pFSReady.promise;
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

var crInfoMap = {};
var crParkingMap = {};
var crUserInfoMap = {};

function initMap() {
    app.pInfoMapReady.resolve();
}
