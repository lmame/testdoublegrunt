(function () {
    'use strict';

    angular.module('com.example.testdoublelib', [
        'ngSanitize',
        'com.bmc.arsys.rx.standardlib.error-handling',

        // View Components.
        'com.example.testdoublelib.view-components.test-label'
    ]);
})();
