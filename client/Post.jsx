Post = React.createClass({
  mixins:[MaterialUI],
  render() {
    return (
      <div>
        <RaisedButton label="Default" />
        <a href={`/post/${this.props.post._id}`}>タイトル?:{this.props.post.title}</a>
        <p>本文?:{this.props.post.body}</p>
      </div>
    )
  }
});
