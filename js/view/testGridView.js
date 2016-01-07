var app = app || {};

app.TestGridView = Backbone.View.extend({

    el: '#app11',

    events: {
        'click #search-by-keyword'  : 'goSearch'
    },

    initialize: function() {
        this.gridContainer = this.$('#exam-list');
    },

    // method
    goSearch: function() {

        app.testGridCollection = new app.TestGridCollection();


        this.listenTo(app.testGridCollection, 'sync', function() {
            // console.log(app.testGridCollection.toJSON());
            this.genGrid()
        });
    },

    genGrid: function() {
        var that = this;
        _.each(app.testGridCollection.toJSON(), function(model, index) {
            var rowModel = new app.TestGridModel(model),
                rowView = new app.TestGridRowView({
                    model: rowModel
                });
            that.gridContainer.append(rowView.$el);

        })
    }

});