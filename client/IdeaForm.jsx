IdeaForm = React.createClass({
  getInitialState: function() {
    return {userInput: '',who:'だれ',what:'どんな',how:'どうやって',keyword:'あれ'};
  },
  handleChange: function(e) {
    this.setState({
      who:this.refs.who.getValue(),
      how:this.refs.how.getValue(),
      what:this.refs.what.getValue(),
      keyword:this.refs.keyword.getValue(),
    });
  },
  _show() {
    this.refs.idea_form_dialog.show();
  },
  _createIdea() {
    IdeaCollection.insert({
      who:this.refs.who.getValue(),
      how:this.refs.how.getValue(),
      what:this.refs.what.getValue(),
      keyword:this.refs.keyword.getValue(),
    })
    this.refs.idea_form_dialog.dismiss();
  },
  render() {
    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._createIdea, ref: 'submit' }
    ];
    return (
        <div>
          <FloatingActionButton onClick={this._show}>
            <FontIcon className="material-icons">add</FontIcon>
          </FloatingActionButton>
          <Dialog
            title="アイディア作成"
            actions={standardActions}
            ref="idea_form_dialog">
            <TextField ref='who' hintText="だれの、" onChange={this.handleChange}/><br/>
            <TextField ref='what' hintText="どんな問題を、" onChange={this.handleChange}/><br/>
            <TextField ref='keyword' hintText="解決のキーワード" onChange={this.handleChange}/><br/>
            <TextField ref='how' hintText="どうやって解決する？"  multiLine={true} onChange={this.handleChange}/>
            <p>{this.state.who}の、{this.state.what}悩みを、{this.state.keyword}で解決する</p>
          </Dialog>
        </div>
    );
  }
});
