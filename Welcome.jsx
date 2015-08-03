WelcomeComponent = React.createClass({
  render() {
    return <div>
      <h1>私の名前は, {this.props.name}</h1>
      <p>/my/name/is/〈あなたの名前〉を入力すると、名前が表示されます</p>
    </div>
  }
});

FlowRouter.route("/post", {
  action: function() {
    posts = [{title:'hello'},{title:'hello2'}]
    ReactLayout.render(MainLayout, {
      content: <PostList posts={posts} />
    });
  }
});

// FlowRouter.route("/my/name/is/:name", {
//   action: function(params) {
//     ReactLayout.render(MainLayout, {
//       content: <WelcomeComponent name={params.name} />
//     });
//   }
// });
