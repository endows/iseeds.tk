MainLayout = React.createClass({
  mixins:[MaterialUI],
  render() {
    return <div>
      <header>
        <AppBar
          title="ルーティングの勉強④"
          subtitle='Materia-uiの導入、そして未来へ〜'
          iconElementRight={<FlatButton label="Save" />} />
      </header>
      <main>
        {this.props.content}
      </main>
      <footer>
        <RaisedButton label="@endows_takashi" primary={true} />
      </footer>
    </div>
  }
});
