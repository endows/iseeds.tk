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
  action: function () {
    ReactLayout.render(MainLayout, {
      content:
      <PostList posts={_posts}/>
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
