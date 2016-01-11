var app = app || {};

app.ReserveTestDataView = Backbone.View.extend({

    tagName: 'div',

    // template: _.template($('#gridRow').html()),

    initialize: function () {
        // this.on({
        //     'bindReplaceButton': this.bindReplace,
        //     'bindDeleteButton': this.bindDelete
        // });
        // this.render();
        // this.trigger('bindReplaceButton');
    },

    render: function() {
        // this.$el.html(this.template(this.model.toJSON()));
        // this.buttonDelete = this.$('.ocs-btn-delete');
    },

});