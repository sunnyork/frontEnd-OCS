var app = app || {};

app.ReserveTestView = Backbone.View.extend({

    el: '#validate-field',

    events: {

        // 'click #search-by-keyword' : function() {
        //     this.goSearch(1);
        // },

    },

    initialize: function() {

        this.publicStarRate = this.$('#exam-level');

        this.initStarRate(this.publicStarRate);

    },

    // method
    initStarRate: function(container) {
        $(container).starRate();
    }

});