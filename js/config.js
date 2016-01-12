require.config({

    // dependency
    shim: {

        // library
        'bootstrap'              : {'deps': ['jquery']},
        'modalInit'              : {'deps': ['bootstrap']},
        'datePicker'             : {'deps': ['bootstrap']},
        'backbone'               : {'deps': ['underscore']},
        'backbonefire'           : {'deps': ['backbone', 'firebase']},

        // plugin
        'starRate'               : {'deps': ['jquery']},
        'rowAccess'              : {'deps': ['jquery']},
        'validate'               : {'deps': ['jquery', 'bootstrap']},
        'validateTip'            : {'deps': ['jquery', 'bootstrap', 'validate']},

        // view
        'testGridView'           : {'deps': ['backbone']},
        'testGridRowView'        : {'deps': ['backbone']},
        'reserveTestView'        : {'deps': ['backbone']},
        'reserveTestRowView'     : {'deps': ['backbone']},

        // model
        'testGridModel'          : {'deps': ['backbone']},
        'reserveTestModel'       : {'deps': ['backbone']},

        // collection
        'testGridCollection'     : {'deps': ['firebase', 'backbone', 'backbonefire']},
        'reserveTestCollection'  : {'deps': ['firebase', 'backbone']},
    },

    // path alias
    baseUrl: 'js',

    paths: {

        // library
        'firebase'              : 'https://cdn.firebase.com/js/client/2.2.1/firebase',
        'backbonefire'          : 'https://cdn.firebase.com/libs/backbonefire/0.5.1/backbonefire.min',
        'underscore'            : 'lib/underscore-min',
        'jquery'                : 'lib/jquery-1.11.3.min',
        'backbone'              : 'lib/backbone',
        'bootstrap'             : 'lib/bootstrap.min',       
        'text'                  : 'lib/text',
        'util'                  : 'util/util',

        // plugin
        'modalInit'             : 'plugin/modalInit',
        'starRate'              : 'plugin/starRate',
        'datePicker'            : 'plugin/bootstrap-datepicker',
        'rowAccess'             : 'plugin/rowAccess',
        'validate'              : 'plugin/jquery.validate.min',
        'validateTip'           : 'plugin/jquery-validate.bootstrap-tooltip',


        // view
        'testGridView'          : 'view/testGridView',
        'testGridRowView'       : 'view/testGridRowView',
        'reserveTestView'       : 'view/reserveTestView',
        'reserveTestRowView'   : 'view/reserveTestRowView',

        // model
        'testGridModel'         : 'model/testGridModel',
        'reserveTestModel'      : 'model/reserveTestModel',

        // collection
        'testGridCollection'    : 'collection/testGridCollection',
        'reserveTestCollection' : 'collection/reserveTestCollection'
    }
});