(function () {
    'use strict';

    angular.module('com.example.testdoubleapp').config(function ($stateProvider) {
        $stateProvider.state('bx', {
            parent: 'rx.viewport',
            template: '<ui-view/>'
        });
    });
})();
