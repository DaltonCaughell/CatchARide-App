mainApp.directive('backButton', function($rootScope) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {},
        link: function(scope, element, attrs) {
            scope.back = function() {
                window.history.back();
            };
        },
        templateUrl: 'components/directives/back-button/back-button.html'
    };
});
