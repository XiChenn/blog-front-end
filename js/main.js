
$(document).ready(function() {
	// var posts = new PostList([
	// 	new Post({ content: "content1", user: "user1@gmail.com"}),
	// 	new Post({ content: "content2", user: "user2@gmail.com"}),
	// 	new Post({ content: "content3", user: "user3@gmail.com"}),
	// 	]);

	var posts = new PostList();
	posts.fetch();

	var postListView = new PostListView({ model: posts });
	$("body").append(postListView.render().$el);
});