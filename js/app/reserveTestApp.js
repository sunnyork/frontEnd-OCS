require(['../config'], function() {
    require([
        'underscore', 'jquery', 'backbone', 'bootstrap',                            // library
        'modalInit', 'starRate',                                                    // plugin
        'reserveTestView', 'reserveTestDataView',                                   // backbone view
        'reserveTestModel',                                                         // backbone model
        'reserveTestCollection'                                                     // backbone collection
    ], function() {

        new app.ReserveTestView();

    });
});