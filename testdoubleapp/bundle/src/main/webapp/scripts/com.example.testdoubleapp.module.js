(function () {
    'use strict';

    angular.module('com.example.testdoubleapp', [
        'ngSanitize',
        'ui.router',
        // all modules that provide non-abstract navigation routes
        'com.example.testdoubleapp.home',
        'com.example.testdoubleapp-ext'
    ]);
})();
