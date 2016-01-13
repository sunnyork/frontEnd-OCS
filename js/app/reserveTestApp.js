require(['../config'], function() {
    require([
        'underscore', 'jquery', 'backbone', 'bootstrap',                              // library
        'modalInit', 'starRate', 'datePicker', 'rowAccess', 'validate', 'validateTip',// plugin
        'reserveTestView', 'reserveTestGridView', 'reserveTestRowView',               // backbone view
        'reserveTestModel', 'reserveTestGridModel',                                   // backbone model
        'reserveTestCollection', 'reserveTestGridCollection'                          // backbone collection
    ], function() {

        new app.ReserveTestView();

    });
});