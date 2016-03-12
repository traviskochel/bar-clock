var React = require('react');
var { Component } = React;
var ClockState = require('../Mixins/ClockState');

var App = React.createClass({
  mixins: [ClockState],
  render: function() {
    return (
      <h1>Hi, the time is {this.formattedTime()}</h1>
    );
  }
})

module.exports = App;
