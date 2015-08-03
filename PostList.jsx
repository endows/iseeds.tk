PostList = React.createClass({
  render() {
    return (
      <div>
        {this.props.posts.map(function (p, i) {
          return (
              <div>
                <p>タイトル:{p.title}</p>
                <p>本文{p.body}</p>
              </div>
          );
        })}
      </div>

    )
  }
});
