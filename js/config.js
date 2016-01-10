require.config({

    // dependency
    shim: {
        'bootstrap'              : {'deps': ['jquery']},
        'backbone'               : {'deps': ['underscore']},
        'backbonefire'           : {'deps': ['backbone', 'firebase']},
        'testGridView'           : {'deps': ['backbone']},
        'testGridRowView'        : {'deps': ['backbone']},
        'testGridModel'          : {'deps': ['backbone']},
        'testGridCollection'     : {'deps': ['firebase', 'backbone', 'backbonefire']}
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

        // view
        'testGridView'          : 'view/testGridView',
        'testGridRowView'       : 'view/testGridRowView',

        // model
        'testGridModel'         : 'model/testGridModel',

        // collection
        'testGridCollection'    : 'collection/testGridCollection'
    }
});