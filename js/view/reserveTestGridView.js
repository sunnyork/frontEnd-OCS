var app = app || {};

app.ReserveTestGridView = Backbone.View.extend({

    el: '#test-grid-wrapper',

    events: {
        'click #add-exam': 'addTest'
    },

    initialize: function () {

        this.testBrand = this.$('#car-maker');
        this.testDifficulty = this.$('#exam-level input');
        this.testGridContainer = this.$('#exam-container');
        this.defaultRow = this.$('#row-init');
        this.hasQuestion = this.$('.has-question');
        this.errMessage = '<span class="text-danger">請選擇車廠品牌</span>';
        this.reserveTestGridCollection = new app.ReserveTestGridCollection();

        this.hasQuestion.attr('value', 0);

        this.listenTo(this.reserveTestGridCollection, 'add', this.renderNewTestRow);
        this.listenTo(this.reserveTestGridCollection, 'remove', this.checkTestQty);
    },

    addTest: function() {

        var brandId = this.testBrand.val(),
            model;

        if (brandId == 'na') {
            this.$('.text-danger').remove();
            $(this.errMessage).insertAfter($('#qlist-check'))
              .delay(1000).fadeOut(500,function(){
                $(this).remove()
              });
            return;
        }
        var model = new app.ReserveTestGridModel({
            brandId: this.testBrand.val(),
            brandName: this.testBrand.find('option[value='+brandId+']').html(),
            difficulty: $(this.testDifficulty).prop('value')
        });

        this.reserveTestGridCollection.add(model);
        this.hasQuestion.attr('value', 1);
    },

    renderNewTestRow: function(model) {
        var newRow = new app.ReserveTestRowView({
            model: model,
            apple: 'beta'
        });
        this.testGridContainer.append(newRow.$el);
        this.resetRowSerialNumber();
        this.defaultRow.hide();
    },

    checkTestQty: function(model) {
        if (0 == this.reserveTestGridCollection.length) {
            this.defaultRow.show();
            this.hasQuestion.attr('value', 0);
        } else {
            this.resetRowSerialNumber();
        }
    },

    resetRowSerialNumber: function() {
        var trs = this.testGridContainer.find('tr');
        $.each(trs, function(i, tr) {
            $(tr).find('td:eq(0)').html(i+1);
        });
    }

});
