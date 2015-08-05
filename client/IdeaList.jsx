IdeaList = React.createClass({
  mixins:[MaterialUI],
  render() {
    return (
      <div>
        {this.props.ideas.map(function (idea, i) {
          return (
              <div>
                <a href={`/idea/${idea._id}`}>
                  <Card>
                    <CardText>
                      <p>{idea.who}の、{idea.what}悩みを、{idea.keyword}で解決する</p>
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
