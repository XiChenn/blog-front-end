var Post = Backbone.Model.extend({
	urlRoot: "http://10.255.200.56:8080/posts",
	//urlRoot: "http://jsonplaceholder.typicode.com/posts",

	validate: function(attrs) {
		if (!attrs.title) {
			return "Title cannot be empty";
		}

		if (!attrs.body) {
			return "Body cannot be null";
		}
	}
});