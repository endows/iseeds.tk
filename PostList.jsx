PostList = React.createClass({
  render() {
    return (
      <div>
        {this.props.posts.map(function (p, i) {
          return (
              <div>
                <a href={`/post/${i}`}>タイトル:{p.title}</a>
                <p>本文:{p.body}</p>
              </div>
          );
        })}
      </div>

    )
  }
});
