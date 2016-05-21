mainApp.directive('crFooter', function($rootScope) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {},
        link: function(scope, element, attrs) {

        },
        templateUrl: 'components/directives/footer/footer.html'
    };
});
