mainApp.service('crLoading', function($loading, $rootScope) {
    var i = 0;
    var enabled = true;
    return {
        showWhile: function(p) {
            var done = false;
            if (enabled) {
                i++;
                $rootScope.crLoadingOn = true;
                $loading.start(Config.DOM.LoadingOverlay);
                p.then(function() {
                    i--;
                    done = true;
                    if (i === 0) {
                        $rootScope.crLoadingOn = false;
                        $loading.finish(Config.DOM.LoadingOverlay);
                    }
                }, function() {
                    i--;
                    done = true;
                    if (i === 0) {
                        $rootScope.crLoadingOn = false;
                        $loading.finish(Config.DOM.LoadingOverlay);
                    }
                });
            }
            return p;
        },
        disable: function() {
            $loading.finish(Config.DOM.LoadingOverlay);
            enabled = false;
        },
        enable: function() {
            enabled = true;
        }
    };
});
