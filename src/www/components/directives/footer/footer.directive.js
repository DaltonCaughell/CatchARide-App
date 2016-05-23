mainApp.directive('crFooter', function($rootScope) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            'page': '=page'
        },
        link: function(scope, element, attrs) {
            console.log(scope.page);
        },
        templateUrl: 'components/directives/footer/footer.html'
    };
});
