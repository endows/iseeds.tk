

FlowRouter.route("/post", {
  subscriptions: function() {
    this.register('posts', Meteor.subscribe('posts'));
  },
  action: function () {
    FlowRouter.subsReady("posts", function() {
      let _posts = PostCollection.find().fetch()
      ReactLayout.render(MainLayout, {
        content:
        <PostList posts={_posts}/>
      });
    });
  }
});

FlowRouter.route("/post/:_id", {
  subscriptions: function() {
    this.register('posts', Meteor.subscribe('posts'));
  },
  action: function (params) {
    FlowRouter.subsReady("posts", function() {
      let _posts = PostCollection.findOne({_id:params._id})
      ReactLayout.render(MainLayout, {
        content:
        <Post post={_posts}/>
      });
    });
  }
});
