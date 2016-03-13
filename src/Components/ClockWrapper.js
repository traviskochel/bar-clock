var React = require('react');
var { Component } = React;
var ClockState = require('../Mixins/ClockState');
var Hours = require('./Hours');

var ClockWrapper = React.createClass({
  mixins: [ClockState],
  render: function() {
    return (
      <div className='clock'>
        <Hours 
          currentHour={this.getCurrentHour()}
          currentMinute={this.getCurrentMinute()}
          currentSecond={this.getCurrentSecond()} />
      </div>
    );
  }
})

module.exports = ClockWrapper;
