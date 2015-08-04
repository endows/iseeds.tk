IdeaList = React.createClass({
  mixins:[MaterialUI],
  render() {
    return (
      <div>
        {this.props.ideas.map(function (p, i) {
          return (
              <div>
                <a href={`/idea/${p._id}`}>
                  <Card>
                    <CardMedia overlay={<CardTitle title={p.who} subtitle="Subtitle"/>}>
                      <img src="http://lorempixel.com/600/337/nature/"/>
                    </CardMedia>
                    <CardText>
                      {p.who}
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
