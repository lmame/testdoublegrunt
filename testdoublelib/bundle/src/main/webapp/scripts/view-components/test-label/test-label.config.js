(function () {
    'use strict';

    angular.module('com.example.testdoublelib.view-components.test-label')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Test Label',
                    group: 'Test Double Library',
                    icon: 'comment_text',
                    type: 'com-example-testdoublelib-test-label',
                    designType: 'com-example-testdoublelib-test-label-design',
                    bundleId: 'com.example.testdoublelib',
                    propertiesByName: [
                        {
                            name: 'label',
                            type: 'string',
                            isConfig: true,
                            isProperty: false,
                            isRequired: false,
                            enableExpressionEvaluation: true
                        }
                    ]
                }
            ]);
        });
})();