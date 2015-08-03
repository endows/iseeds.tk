let _posts = [
  {
    _id:0,
    title: 'hello',
    body:"あのー"
  }, {
    _id:1,
    title: 'hello2',
    body:"あのー２"
  }
]

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
  action: function (params) {
    ReactLayout.render(MainLayout, {
      content:
      <PostList posts={[_posts[params._id]]}/>
    });
  }
});
