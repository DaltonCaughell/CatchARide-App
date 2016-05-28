mainApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('addcar', {
            url: "/addcar",
            templateUrl: "components/pages/add-car/add-car.html",
            controller: "AddCarController",
            data: {
                requireLogin: true
            }
        }).state('signup', {
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
        }).state('chat', {
            url: "/chat/:ChatID",
            templateUrl: "components/pages/chat/chat.html",
            controller: "ChatController",
            data: {
                requireLogin: true
            }
        }).state('drivers', {
            url: "/drivers/:SearchID",
            templateUrl: "components/pages/drivers/drivers.html",
            controller: "DriversController",
            data: {
                requireLogin: true
            }
        }).state('parking', {
            url: "/parking",
            templateUrl: "components/pages/parking/parking.html",
            controller: "ParkingController",
            data: {
                requireLogin: true
            }
        }).state('payment', {
            url: "/payment",
            templateUrl: "components/pages/payment/payment.html",
            controller: "PaymentController",
            data: {
                requireLogin: true
            }
        }).state('schedule', {
            url: "/schedule",
            templateUrl: "components/pages/schedule/schedule.html",
            controller: "ScheduleController",
            data: {
                requireLogin: true
            }
        }).state('settings', {
            url: "/settings",
            templateUrl: "components/pages/settings/settings.html",
            controller: "SettingsController",
            data: {
                requireLogin: true
            }
        }).state('info', {
            url: "/info/:RideID",
            templateUrl: "components/pages/info/info.html",
            controller: "InfoController",
            data: {
                requireLogin: true
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
