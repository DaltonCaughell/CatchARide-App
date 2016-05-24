mainApp.directive('crFooter', function($rootScope) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            'page': '=page'
        },
        link: function(scope, element, attrs) {
            console.log(scope.page);

            scope.showFooter = true;

            document.addEventListener('hidekeyboard', function() {
                scope.showFooter = true;
                scope.$apply();
            }, false);
            document.addEventListener('showkeyboard', function() {
                scope.showFooter = false;
                scope.$apply();
            }, false);

        },
        templateUrl: 'components/directives/footer/footer.html'
    };
});
