var app = app || {};

app.TestGridCollection = Backbone.Firebase.Collection.extend({

    model: app.TestGridModel,

    autoSync: true,

    // url: 'https://sunnyork.firebaseio.com/test/page11',
    // url: 'https://sunnyork.firebaseio.com/ocs/manageTestData',
    url: function() {
        return new Firebase('https://sunnyork.firebaseio.com/test/page11');
    },

    initialize: function() {

    }

});

