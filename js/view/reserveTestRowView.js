var app = app || {};

app.ReserveTestRowView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#newTestRow').html()),

    events: {
        'click .starRate': 'updateDifficulty',
        'change .question-qty': 'updateQty'
    },

    initialize: function () {
        this.on({
            'bindDelete': this.bindDelete,
            'bindStarRate': this.bindStarRate
        });
        this.render();

        this.trigger('bindStarRate');
        this.trigger('bindDelete');
    },

    render: function() {
        this.$el.append(this.template(this.model.toJSON()));

        this.deleteButton = this.$('.ocs-btn-delete');
        this.starRateContainer = this.$('.starRate');
        this.difficulty = this.$('.difficulty');
        this.questionQty = this.$('.question-qty');

    },

    updateDifficulty: function() {
        this.model.set({
            difficulty: this.difficulty.val()
        });
    },

    updateQty: function() {
        this.model.set({
            questionQty: this.questionQty.val()
        });
    },

    bindDelete: function() {
        var that = this;
        this.deleteButton.modalInit({
            confirmCallback:function(){
                that.$el.remove();
                that.model.destroy();
            }
        });
    },

    bindStarRate: function() {
        this.starRateContainer.starRate({
            initLevel: this.model.toJSON().difficulty
        });
    }

});