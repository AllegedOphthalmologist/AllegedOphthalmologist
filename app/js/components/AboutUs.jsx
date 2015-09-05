var React = require('react');
var Donuts = require('./donutChart.js');

//Stores
var DataStore = require('./../stores/DataStore');

//Child Views
var BulbView = require('./bulbView.jsx');
var donutModals = require('./energyBreakDownView.jsx');


var AboutUs = React.createClass({ 
  getInitialState: function(){ 
    return {
      data: {
        "Watt": [{}],
        "Utility": [{}]
      },
    };
  },

  componentDidMount: function(){ 
    this.setState({data: DataStore.getData() });
  }, 

  makeGraphs: function(){ 
    Donuts.create('.modal1', this.state.data.Watt[0].genmix.slice(1, 4), 'donut1');
    Donuts.create('.modal2', this.state.data.Watt[0].genmix, 'donut2');
  },

  render: function(){ 
    var modal1 = '.modal1';
    var modal2 = '.modal2';
    return ( 
      <div>   
        <BulbView name={"bulb2"} height={400} width={400} margin={5} cx={50} cy={50} r={50} />
        <div className = {modal1}></div>
        <div className = {modal2}></div>
      </div>
    )

  }


});

module.exports = AboutUs;

