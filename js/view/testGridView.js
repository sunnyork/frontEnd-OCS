// [======TODO=======]
// Find out how to limit the query range with specific start point,
// means fetch usable result only, but fetch all then filter in local.

var app = app || {};

app.TestGridView = Backbone.View.extend({

    el: '#app11',

    events: {

        'click #search-by-keyword' : function() {
            this.goSearch();
        },

        'click .pagination-item' : function(event) {
            var toPage = $(event.currentTarget).attr('toPage');
            this.goSearch(toPage);
        }

    },

    initialize: function() {

        this.defaultStartPage = 1;
        this.gridContainer = this.$('#exam-list');
        this.emptyRow = this.$('#row-init');
        this.paginationList = this.$('#pagination-list');

    },

    // method
    goSearch: function(startPage) {
        
        var toPage = startPage ? startPage : this.startPage;

        this.testGridCollection = new app.TestGridCollection();

        this.listenTo(this.testGridCollection, 'sync', function() {
            if (this.testGridCollection.length == 0) {
                alert('no result found')
            } else {
                this.emptyRow.hide();
                this.gridContainer.html('');
                this.genGrid(this.genSlicedList(toPage));

                $('.pagination').append('<li class="pagination-item" toPage="11">test</li>')
            }
        });

        this.testGridCollection.fetch();
    },

    genSlicedList: function(startPage) {

        var toPage = startPage ? startPage : this.defaultStartPage,
            fullList = new app.TestGridCollection(),
            slicedList = fullList.toJSON().slice(toPage-1, toPage+9);

        return slicedList;

    },

    genGrid: function(slicedList) {

        var that = this;

        _.each(slicedList, function(model, index) {

            var rowModel = new app.TestGridModel(model),
                rowView = new app.TestGridRowView({
                    model: rowModel
                });
            that.gridContainer.append(rowView.$el);

        })
    },

    genPagination: function() {
        this.paginationList.show();
    }

    // old algorism for pagination
    //
    // if (0 != startPage - 1) {
    //   prevRowBtn.clone().trigSearch({
    //     toPage: startPage - 1
    //   }).appendTo(inner);
    // }
    // // gen. pagination buttons        
    // while (i <= endPage) {
    //   var newBtn = btn.clone();
    //   newBtn
    //     .find('a').text(i).end()
    //     .appendTo(inner);
    //   if (i == current) {
    //     newBtn.addClass('active');
    //   }
    //   newBtn.trigSearch({
    //     toPage: i
    //   })
    //   i++;
    // }
    // // gen btn for next 10 (default: next 10)
    // if (endPage < finalPage) {
    //   nextRowBtn.clone().trigSearch({
    //     toPage: endPage + 1
    //   }).appendTo(inner);
    // }

});