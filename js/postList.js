var PostList = Backbone.Collection.extend({
	model: Post,

	url: "http://localhost:8080/posts"
});