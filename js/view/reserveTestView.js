var app = app || {};

app.ReserveTestView = Backbone.View.extend({

    el: '#validate-field',

    events: {
        'change .examinee-list input' : 'checkLabelHighlight'
    },

    initialize: function() {

        this.examTitle = this.$('#exam-title');
        this.examDuration = this.$('#exam-duration');
        this.examDateStart = this.$('#exam-date-start');
        this.examDateEnd = this.$('#exam-date-end');
        this.examineeList = this.$('.examinee-list label input');

        this.genericStarContainer = this.$('#exam-level');
        this.reserveTestCollection = new app.ReserveTestCollection({model: new app.ReserveTestModel()});

        // initialize plugins
        this.initStarRate(this.genericStarContainer);
        this.initDatePicker();
        this.checkLabelHighlight();
        this.initValidator();

        // initialize sub views
        this.initTestGrid();
    },

    initTestGrid: function() {
        this.testGridView = new app.ReserveTestGridView();
    },

    initStarRate: function(container) {
        $(container).starRate();
    },

    initDatePicker: function() {
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
        };
        if (event == undefined) {
            $.each(this.examineeList, function(i, e) {
                setHighlight(e);
            });
        } else {
            setHighlight(event.currentTarget);
        }
    },

    initValidator: function() {
        var that = this;
        $('#validate-field').validate({ // @ 3rd.party plugin: jquery-validation-bootstrap-tooltip + jquery.validation
          rules: {
            examTitle: "required",
            examStartDate: {date:true, required: true},
            examEndDate: {date:true, required: true},
            examDuration: {digits:true, required: true},
            'examineeList[]': {required:true},
            questionList: {
              required: true,
              min: 1
            }
          },
          messages: {
            examTitle: '考試主題',
            examStartDate: '起始日:yyyy/mm/dd',
            examEndDate: '截止日:yyyy/mm/dd',
            examDuration: '請設時限 (數字)',
            'examineeList[]': '請至少選擇一名考生',
            questionList: '請至少設定一題考題'
          },
          tooltip_options: {
            examTitle: {placement: 'top'},
            examStartDate: {placement: 'bottom'},
            examEndDate: {placement: 'bottom'},
            examDuration: {placement: 'top'},
            'examineeList[]': {placement: 'right'},
            questionList: {placement: 'top'}
          },
          submitHandler: function(form) {
            that.submitForm();
          },
          focusInvalid: false, // turn focusInvalid (to 1.st error) function off
          focusCleanup: true // hide error tip as error-input:focus
        });
    },

    getSelectedExaminees: function() {
        var examineeList = [];
        $(this.examineeList).each(function(i, e) {
            if ($(e).prop('checked')) {
                examineeList.push($(e).val())
            }
        });
        return examineeList;
    },

    submitForm: function() {
        this.reserveTestCollection.set({
            title:      this.examTitle.val(),
            start:      this.examDateStart.val(),
            end:        this.examDateEnd.val(),
            duration:   this.examDuration.val(),
            questions:  this.testGridView.reserveTestGridCollection.toJSON(),
            examinees:  this.getSelectedExaminees()
        });
        /* demo only */ console.log(this.reserveTestCollection.toJSON())
        /* demo only */ var tempMessage = 'submit後包成ＪＳＯＮ的資料打ＡＪＡＸ\n';
        /* demo only */ tempMessage +='成功就bootstrap modal出現訊息，confirm後回考試列表\n';
        /* demo only */ tempMessage +='失敗則bootstrap modal出現訊息，confirm留在頁面上\n';
        /* demo only */ alert(tempMessage);
    }

});