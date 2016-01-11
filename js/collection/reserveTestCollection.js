var app = app || {};

// app.ReserveTestCollection = Backbone.Firebase.Collection.extend({
app.ReserveTestCollection = Backbone.Collection.extend({

    model: app.ReserveTestModel,

    // autoSync: true,

    url: function() {
    },

    initialize: function() {

    }

});

