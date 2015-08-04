Post = React.createClass({
  mixins:[MaterialUI],
  render() {
    return (
      <div>
        <Card>
          <CardMedia overlay={<CardTitle title={this.props.post.title} subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>

          <CardText>
            {this.props.post.body}
          </CardText>
        </Card>

      </div>
    )
  }
});
