MainLayout = React.createClass({
  mixins: [MaterialUI],
  render() {
    return <div>
      <header>
        <AppBar iconElementRight={ < FlatButton label = "Save" />} title="iSeed"/>
      </header>
      <main>
        {this.props.content}
      </main>
      <footer>
      <IdeaForm></IdeaForm>
      </footer>
    </div>
  }
});
