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
        this.initDatePicker();
        this.checkLabelHighlight();
    },

    // method
    initStarRate: function(container) {
        $(container).starRate();

    },

    initDatePicker: function() {
        // plugin init: data picker
        $('#datepicker').datepicker({
            format: "yyyy/mm/dd",
            startDate: "today",
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: true,
            autoclose: false,
            todayHighlight: false
        });
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