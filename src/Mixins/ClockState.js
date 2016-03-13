var React = require('react');

var ClockState = {
  getInitialState: function() {
    return {
      currentDate: new Date(),
      defaultHourMode: 12
    };
  },
  componentDidMount: function() {
    setInterval(this.setCurrentTime, 1000);
  },
  getCurrentHour: function(hourMode = this.state.defaultHourMode){
    return this.state.currentDate.getHours() % hourMode;
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
  formattedTime: function(opts={hourMode: this.state.defaultHourMode}){
    return this.getCurrentHour(opts.hourMode) + ':' + this.getCurrentMinute() + ':' +  this.getCurrentSecond();
  }
};

module.exports = ClockState;