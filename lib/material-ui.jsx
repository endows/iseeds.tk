if(Meteor.isClient){
  var ThemeManager = new MUI.Styles.ThemeManager();

  Object.keys(MUI).forEach(function (key) {
    this[key] = MUI[key]
  });
  injectTapEventPlugin();

  MaterialUI = {
    childContextTypes: {
      muiTheme: React.PropTypes.object
    },
    getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }
  }
}
