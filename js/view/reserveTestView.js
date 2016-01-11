var app = app || {};

app.ReserveTestView = Backbone.View.extend({

    el: '#validate-field',

    events: {

        // 'click #search-by-keyword' : function() {
        //     this.goSearch(1);
        // },

    },

    initialize: function() {

        console.log('view initialized');
        // this.gridContainer  = this.$('#exam-list');

    },

    // method
    goSearch: function(startFromPage) {

        // this.testGridCollection = new app.TestGridCollection();

        // this.listenTo(this.testGridCollection, 'sync', function() {
        //     if (this.testGridCollection.length == 0) {
        //         alert('no result found')
        //     } else {
        //         this.emptyRow.hide();
        //         this.gridContainer.empty();
        //         this.genGrid(this.genSlicedList(startFromPage));
        //         this.genPagination(startFromPage);
        //     }
        // });
    }

});