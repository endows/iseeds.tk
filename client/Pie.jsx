Pie = React.createClass({
  shouldComponentUpdate(nextProps) {
    this.myDoughnut.segments[0].value = nextProps.yes
    this.myDoughnut.segments[1].value = nextProps.no
    this.myDoughnut.update()
    return true
  },
  render() {
    return (<div><canvas height="500" id="sample" width="500"></canvas></div>)
  },
  componentDidMount() {
    var doughnutData = [
      {
        value: this.props.yes,
        color: "#aaf2fb",
        label:'いいね'
      }, {
        value: this.props.no,
        color: "#ffb6b9",
        label:'わるいね'
      }
    ];

    this.myDoughnut = new Chart(document.getElementById("sample").getContext("2d")).Doughnut(doughnutData);
  }
});
