Post = React.createClass({
  render() {
    return (
      <div>
        <a href={`/post/${this.props.post._id}`}>タイトル?:{this.props.post.title}</a>
        <p>本文?:{this.props.post.body}</p>
      </div>
    )
  }
});
