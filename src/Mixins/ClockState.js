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
  getCurrentHour: function(hourMode){
    return this.state.currentDate.getHours() % hourMode;
  },
  getCurrentMinute: function(){
    var minutes = this.state.currentDate.getMinutes();
    return (minutes < 10 ? "0" + minutes : minutes);
  },
  getCurrentSecond: function(){
    var seconds = this.state.currentDate.getSeconds();
    return (seconds < 10) ? "0" + seconds : seconds;
  },
  setCurrentTime: function(){
    this.setState({
      currentDate: new Date()
    });
  },
  formattedTime: function(opts={hourMode:24}){
    return this.getCurrentHour(opts.hourMode) + ':' + this.getCurrentMinute() + ':' +  this.getCurrentSecond();
  }
};

module.exports = ClockState;