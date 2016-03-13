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
      return {
        top: (this.props.currentMinute / 60 * 100)+'%' 
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