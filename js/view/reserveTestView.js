var app = app || {};

app.ReserveTestView = Backbone.View.extend({

    el: '#validate-field',

    events: {

        'change .examinee-list input' : 'checkLabelHighlight'

    },

    initialize: function() {

        this.genericStarContainer = this.$('#exam-level');
        this.examineeList = this.$('.examinee-list label input');

        this.initStarRate(this.genericStarContainer);
        this.checkLabelHighlight();
    },

    // method
    initStarRate: function(container) {
        $(container).starRate();

    },

    checkLabelHighlight: function(event) {

        var setHighlight = function(ele) {
            var ele = $(ele),
                examineeWrapper = $(ele).parent().parent().parent();
            if(ele.prop('checked')) {
                examineeWrapper.addClass('highlight');
            } else {
                examineeWrapper.removeClass('highlight');
            }
        }

        if (event == undefined) {
            $.each(this.examineeList, function(i, e) {
                setHighlight(e);
            });
        } else {
            setHighlight(event.currentTarget);
        }

    }

});