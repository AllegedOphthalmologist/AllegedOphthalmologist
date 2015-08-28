var React = require('react');

var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;

var ModalI = require('./energyBreakDownView.jsx')

// Actions
var ViewActions = require('./../actions/ViewActions');

//Store
var DataStore = require('./../stores/DataStore');

var MainView = React.createClass({
  getInitialState: function(){
    return {
      data: {
        "Watt": [{}],
        "Utility": [{}]
      }
    };
  },

  
  loadData: function (data) {
    this.setState({data: DataStore.getData()});
  },
  
  componentDidMount: function (){
    DataStore.addChangeListener(this.loadData);
    ViewActions.loadWatt()
    .then(ViewActions.loadUtility)
    .catch(function(err) {
      console.log("ERROR: ", err);
    });
  },
  
  componentWillUnmount: function (){
    DataStore.removeChangeListener(this.loadData);
  },

  render: function() {
    return (
      <div>This is the MainView
      <div>Watt is Currently {this.state.data}</div>     
      <div>Power is Currently {this.state.data.energy_state}</div>
      {(this.state.data.at_peak) ? <div>At Peak Use!</div> : null}


      <ModalI> </ModalI>      
      

      </div>
      
    );
  }
});

module.exports = MainView;