require(['../config'], function() {
    require([
        'underscore', 'jquery', 'backbone', 'bootstrap',                              // library
        'modalInit', 'starRate', 'datePicker', 'rowAccess', 'validate', 'validateTip',// plugin
        'reserveTestView', 'reserveTestRowView',                                      // backbone view
        'reserveTestModel',                                                           // backbone model
        'reserveTestCollection'                                                       // backbone collection
    ], function() {

        new app.ReserveTestView();

    });
});