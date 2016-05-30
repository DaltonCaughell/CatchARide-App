mainApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('addcar', {
            url: "/addcar",
            templateUrl: "components/pages/add-car/add-car.html",
            controller: "AddCarController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('signup', {
            url: "/signup",
            templateUrl: "components/pages/sign-up/sign-up.html",
            controller: "SignUpController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : false
            }
        })
        .state('index', {
            url: "/index",
            templateUrl: "components/pages/index/index.html",
            controller: "IndexController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('entry', {
            url: "/entry",
            templateUrl: "components/pages/entry/entry.html",
            controller: "EntryController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : false
            }
        }).state('chat', {
            url: "/chat/:ChatID",
            templateUrl: "components/pages/chat/chat.html",
            controller: "ChatController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('drivers', {
            url: "/drivers/:SearchID",
            templateUrl: "components/pages/drivers/drivers.html",
            controller: "DriversController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('parking', {
            url: "/parking",
            templateUrl: "components/pages/parking/parking.html",
            controller: "ParkingController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('payment', {
            url: "/payment",
            templateUrl: "components/pages/payment/payment.html",
            controller: "PaymentController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('schedule', {
            url: "/schedule/:upcoming",
            templateUrl: "components/pages/schedule/schedule.html",
            controller: "ScheduleController",
            params: {
                upcoming: 'true'
            },
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('settings', {
            url: "/settings",
            templateUrl: "components/pages/settings/settings.html",
            controller: "SettingsController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('info', {
            url: "/info/:RideID",
            templateUrl: "components/pages/info/info.html",
            controller: "InfoController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('user-info', {
            url: "/user-info/:UserID/:RideID",
            templateUrl: "components/pages/user-info/user-info.html",
            controller: "UserInfoController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        }).state('reset', {
            url: "/reset/:TempKey",
            templateUrl: "components/pages/reset/reset.html",
            controller: "ResetController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : false
            }
        }).state('default', {
            url: "*path",
            templateUrl: "components/pages/index/index.html",
            controller: "IndexController",
            data: {
                requireLogin: (Config.DEV_MODE) ? false : true
            }
        });

});
