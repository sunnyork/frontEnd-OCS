var app = app || {};

app.TestGridCollection = Backbone.Firebase.Collection.extend({
    model: app.TestGridModel,
    url: 'https://sunnyork.firebaseio.com/test/page11',
    initialize: function() {

    }
});

