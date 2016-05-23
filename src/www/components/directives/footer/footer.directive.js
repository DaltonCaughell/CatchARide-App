mainApp.directive('crFooter', function($rootScope) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            page: '='
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'components/directives/footer/footer.html'
    };
});
