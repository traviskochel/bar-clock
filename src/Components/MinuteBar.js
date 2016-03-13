var React = require('react');

var MinuteBar = React.createClass({
  propTypes: {
    currentMinute: React.PropTypes.number,
    barStatus: React.PropTypes.string
  },
  heightStyle: function(){
    if (this.props.barStatus == 'past') {
      return {top: 0}
    } else if (this.props.barStatus == 'current') {
      var secondsInHour = 3600;
      var currentSecondInHour = (this.props.currentMinute * 60) + this.props.currentSecond;
      return {
        top: (100 - (currentSecondInHour / secondsInHour * 100))+'%' 
      }
    } else {
      return {display: 'none'}
    }
  },
  render: function() {
    return (
      <div 
        className={'clock--minuteBar'}
        style={this.heightStyle()} />
    );
  }

});

module.exports = MinuteBar;