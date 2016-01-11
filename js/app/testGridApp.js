require(['../config'], function() {
    require([
        'underscore', 'jquery', 'backbone', 'backbonefire', 'bootstrap',            // library
        'modalInit',                                                                // plugin
        'testGridView', 'testGridRowView',                                          // backbone view
        'testGridModel',                                                            // backbone model
        'testGridCollection'                                                        // backbone collection
    ], function() {

        new app.TestGridView();

    });
});