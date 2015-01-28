var PostList = Backbone.Collection.extend({
	model: Post,

	url: "http://10.255.200.56:8080/posts"
	//url: "http://jsonplaceholder.typicode.com/posts"
});