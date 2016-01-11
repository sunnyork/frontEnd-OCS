require(['../config'], function() {
    require([
        'underscore', 'jquery', 'backbone', 'bootstrap',                            // library
        'modalInit',                                                                // plugin
        'reserveTestView'                                                           // backbone view
        // 'testGridView', 'testGridRowView',                                          // backbone view
        // 'testGridModel',                                                            // backbone model
        // 'testGridCollection'                                                        // backbone collection
    ], function() {

        new app.ReserveTestView();

    });
});