var init = function(tpl) {

	var M = Backbone.Model.extend({
		defaults: {
			name: 'dfav',
			age: 203,
			gender: 'male',
			hobbit: 'cycling'
		}
	});

	var V = Backbone.View.extend({

		templatePool: tpl,
		targetTemplate: 'tpl002',
		tagName: 'span',

		initialize: function() {
			this.render();
		},

		render: function() {
			// var output = ocs.util.template(tpl, 'tpl002', this.model);
			var output = ocs.util.template.call(this);
			this.$el
				.html(output)
				.appendTo($('body'));
		}

	});

	var m = new M();

	var v = new V({
		model: m
	});

};