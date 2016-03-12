var React = require('react');

var ClockState = {
  getInitialState: function() {
    return {
      currentDate: new Date()
    };
  },
  componentDidMount: function() {
    setInterval(this.setCurrentTime, 1000);
  },
  getCurrentHour: function(){
    return this.state.currentDate.getHours();
  },
  getCurrentMinute: function(){
    return this.state.currentDate.getMinutes();
  },
  getCurrentSecond: function(){
    return this.state.currentDate.getSeconds();
  },
  setCurrentTime: function(){
    this.setState({
      currentDate: new Date()
    });
  },
  formattedTime: function(){
    return this.getCurrentHour() + ':' + this.getCurrentMinute() + ':' +  this.getCurrentSecond();
  }
};

module.exports = ClockState;