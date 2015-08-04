PostList = React.createClass({
  mixins:[MaterialUI],
  render() {
    return (
      <div>
        {this.props.posts.map(function (p, i) {
          return (
              <div>
                <a href={`/post/${p._id}`}>
                  <Card>
                    <CardMedia overlay={<CardTitle title={p.title} subtitle="Subtitle"/>}>
                      <img src="http://lorempixel.com/600/337/nature/"/>
                    </CardMedia>

                    <CardText>
                      {p.body}
                    </CardText>
                  </Card>
                </a>
              </div>
          );
        })}
      </div>

    )
  }
});
