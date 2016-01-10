var app = app || {};

app.TestGridRowView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#gridRow').html()),

    initialize: function () {
        this.on({
            'bindReplaceButton': this.bindReplace,
            'bindDeleteButton': this.bindDelete
        });
        this.render();
        this.trigger('bindReplaceButton');
        this.trigger('bindDeleteButton');
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.buttonReplace = this.$('.ocs-btn-replace');
        this.buttonDelete = this.$('.ocs-btn-delete');
    },

    bindReplace: function() {
        var buttonReplace = this.buttonReplace;
        buttonReplace.modalInit({
            modalContainer: '#replace-container',
            confirmBtn: '#replace-confirm',
            cancelBtn: '#replace-cancel',
            confirmCallback:function() {
                /* demo only */ var tempMessage = 'Test ID: ' + buttonReplace.attr('testid');
                /* demo only */ tempMessage += '\n';
                /* demo only */ tempMessage += 'File Name: ' + $('#replace-exam-file').val();
                /* demo only */ tempMessage += '\n\n';
                /* demo only */ tempMessage += '說明:';
                /* demo only */ tempMessage += '\n';
                /* demo only */ tempMessage += '這邊原本用testID和上傳檔案AJAX打back-end,由response資料決定畫面顯示內容，這邊略過';
                /* demo only */ alert(tempMessage);
            }
        });

    },

    bindDelete: function() {
        var buttonDelete = this.buttonDelete,
            viewObject = this;
        buttonDelete.modalInit({
            modalContainer: '#delete-container',
            confirmBtn: '#modal-confirm',
            cancelBtn: '#modal-cancel',
            confirmCallback: function() {
                /* demo only */ var tempMessage = 'Test ID: ' + buttonDelete.attr('testid');
                /* demo only */ tempMessage += '\n';
                /* demo only */ tempMessage += '這邊用testID AJAX打back-end,由response資料決定畫面顯示內容';
                /* demo only */ tempMessage += '\n';
                /* demo only */ tempMessage += '刪除成功請按ＯＫ';
                /* demo only */ tempMessage += '\n';
                /* demo only */ tempMessage += '失敗請按CANCEL';
                /* demo only */ window.confirm(tempMessage) ?
                /* demo only */     (function(){
                /* demo only */         viewObject.buttonReplace.hide();
                /* demo only */         viewObject.buttonDelete.hide();
                /* demo only */         viewObject.$el.addClass('marked-row animate');
                /* demo only */     })():
                /* demo only */     (function(){
                /* demo only */         alert('刪除失敗...原因是blah blah...');
                /* demo only */     })();
            }
        });
    }

});