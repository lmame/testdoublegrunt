(function () {
    'use strict';

    angular.module('com.example.testdoublelib.view-components.test-label')
        .filter('comExampleTestdoublelibMyFilter', function () {
            return function (labelText) {
                return 'Input Parameter: ' + labelText;
            };
        });
})();