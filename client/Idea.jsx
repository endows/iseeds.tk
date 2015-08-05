

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
    let h1_style = {'font-size':'100px'}
    return (
      <div>
        <Card>
          <CardText>
            <h1 style={h1_style}>{this.props.idea.who}の、</h1>
            <h1 style={h1_style}>{this.props.idea.what}悩みを、</h1>
            <h1 style={h1_style}>{this.props.idea.keyword}で解決する</h1>
            <h1>{this.props.idea.how}</h1>
            <p>このアイディア、どう思う？</p>
            <RaisedButton label="いいね！" secondary={true} onClick={this.vote_yes} class='btn btn-primary' ></RaisedButton>
            <RaisedButton label="わるいね！" primary={true} onClick={this.vote_no} class='btn btn-danger' ></RaisedButton>
            <Pie yes={this.state.yes_cnt} no={this.state.no_cnt} />
          </CardText>
        </Card>
      </div>
    )
  }
});
