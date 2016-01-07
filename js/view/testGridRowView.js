var app = app || {};

app.TestGridRowView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#gridRow').html()),

    initialize: function () {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

});