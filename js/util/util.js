var app = {} || app;
app.util = {

	template: function() {

        console.log({
            templatePool: this.templatePool,
            targetTemplate: this.teragetTemplate,
            this: this
        })

		var templatePoolDOM = $('<div />').html(this.templatePool),
			outputTemplateDOM = templatePoolDOM.find('#'+this.targetTemplate),
			outputTemplateStr = _.unescape(outputTemplateDOM.html()),
			genOutput = _.template(outputTemplateStr),
			outputStr = genOutput(this.model.toJSON());

		return outputStr;
	}

}