(function () {
    'use strict';

    angular.module('com.example.testdoublelib.view-components.test-label')
        .directive('comExampleTestdoublelibTestLabel', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/test-label/com-example-testdoublelib-test-label.directive.html',
                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();