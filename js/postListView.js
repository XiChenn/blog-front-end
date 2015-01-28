var PostListView = Backbone.View.extend({
	tagName: "ul",

	id: "post",

	initialize: function(options) {
		if (!(options && options.model)) {
			throw new Error("model is not specialized.");
		}

		this.model.on("add", this.onAddPost, this);
	},

	onAddPost: function(post) {
		var view = new PostView({ model: post });
		this.$el.append(view.render().$el);
	},

	events: {
		"click #post": "onClickPost",
		"keypress #body": "onKeyPress"
	},

	onClickPost: function() {
		var $title = this.$('#title');
		var $body = this.$("#body");

		if ($body.val() && $title.val()) {
			var post = new Post({ title: $title.val(), body: $body.val() });
			// post.save(); // POST to the server
			// this.model.add(post);
			this.model.create(post);// == line 30 and 31 
		}

		$title.val("");
		$body.val("");
	},

	onKeyPress: function(e) {
		if (e.ctrlKey && e.keyCode == 13) {
			this.onClickPost();
		}
	},	

	render: function() {
		var self = this;

		this.$el.append("<p>" + "<input type='text' autofocus id='title'></input>" + "</p>");
		this.$el.append("<p>" + "<textarea id='body' cols=30 rows=10></textarea>" + "</p>");
		this.$el.append("<p>" + "<button id='post'>Post</button>" + "</p>");

		this.model.each(function(post) {
			var view = new PostView({ model: post });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});