require(['../config'], function() {
    require([
        // 'text!../tpl/testGrid.html', 'text',                                        // template
        'underscore', 'jquery', 'backbone', 'backbonefire', 'bootstrap', 'util',    // library
        'testGridView', 'testGridRowView',                                          // backbone view
        'testGridModel',                                                            // backbone model
        'testGridCollection'                                                        // backbone collection
    ], function(tpl) {

        new app.TestGridView();

    });
});