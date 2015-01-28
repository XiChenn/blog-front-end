var Post = Backbone.Model.extend({
	urlRoot: "http://localhost:8080/posts",

	validate: function(attrs) {
		if (!attrs.title) {
			return "Title cannot be empty";
		}

		if (!attrs.body) {
			return "Body cannot be null";
		}
	}
});