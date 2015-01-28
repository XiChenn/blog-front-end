
var PostView = Backbone.View.extend({
	tagName: "li",

	initialize: function(options) {
		if (!(options && options.model)) {
			throw new Error("model is ot specialized.");
		}
	},

	render: function() {
		this.$el.html("<p>" + this.model.escape("title") + "</p>" + this.model.escape("body"));

		return this;
	}
})