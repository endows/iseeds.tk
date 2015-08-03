WelcomeComponent = React.createClass({
  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
    </div>
  }
});
ReactLayout.render(WelcomeComponent, {name: "Arunoda"})
