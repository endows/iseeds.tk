

Idea = React.createClass({
  mixins:[MaterialUI],
  getInitialState: function() {
    return {yes_cnt: this.props.idea.yes_cnt,no_cnt:this.props.idea.no_cnt};
  },
  vote_yes() {
    if(localStorage[this.props.idea._id] != 'voted'){
      this.setState({yes_cnt: this.state.yes_cnt + 1});
      localStorage[this.props.idea._id] = 'voted'
      IdeaCollection.update({_id:this.props.idea._id},{$inc:{yes_cnt:1}})
    }
  },
  vote_no() {
    if(localStorage[this.props.idea._id] != 'voted'){
      this.setState({no_cnt: this.state.no_cnt + 1});
      localStorage[this.props.idea._id] = 'voted'
      IdeaCollection.update({_id:this.props.idea._id},{$inc:{no_cnt:1}})
    }
  },
  render() {
    console.log(this.props.idea)
    return (
      <div>
        <Card>
          <CardMedia overlay={<CardTitle title={this.props.idea.who} subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>

          <CardText>
            {this.props.idea.who}
            {this.props.idea.what}
            {this.props.idea.keyword}
            <RaisedButton label="いいね！" secondary={true} onClick={this.vote_yes} class='btn btn-primary' ></RaisedButton>
            <RaisedButton label="わるいね！" primary={true} onClick={this.vote_no} class='btn btn-danger' ></RaisedButton>

            <Pie yes={this.state.yes_cnt} no={this.state.no_cnt} />

          </CardText>
        </Card>

      </div>
    )
  }
});
