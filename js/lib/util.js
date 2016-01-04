var ocs = {} || ocs;
ocs.util = {

	// template: function(templatePool, targetTemplate, model) {
	template: function() {

		var templatePoolDOM = $('<div />').html(this.templatePool),
			outputTemplateDOM = templatePoolDOM.find('#'+this.targetTemplate),
			outputTemplateStr = _.unescape(outputTemplateDOM.html()),
			genOutput = _.template(outputTemplateStr),
			outputStr = genOutput(this.model.toJSON());

		return outputStr;
	}

}