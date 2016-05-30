mainApp.directive('backButton', function($rootScope, $state) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            'page': '=page'
        },
        link: function(scope, element, attrs) {
            scope.back = function() {
                if (scope.page !== undefined && scope.page !== null && scope.page !== "") {
                    $state.go(scope.page);
                } else {
                    window.history.back();
                }
            };
        },
        templateUrl: 'components/directives/back-button/back-button.html'
    };
});
