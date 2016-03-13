var React = require('react');
var MinuteBar = require('./MinuteBar');

var HourBar = React.createClass({
  propTypes: {
    index: React.PropTypes.number,
    currentHour: React.PropTypes.number,
    currentMinute: React.PropTypes.number,
  },
  barStatus: function(){
    if (this.props.currentHour > (this.props.index + 1)) {
      return 'past';
    } else if (this.props.currentHour == (this.props.index + 1)) {
      return 'current';
    } else {
      return 'future';
    }
  },
  render: function() {
    return (
      <div className={'clock--hourBar clock--hourBar-' + this.props.index}>
        <MinuteBar 
          currentMinute={this.props.currentMinute}
          currentSecond={this.props.currentSecond}
          barStatus={this.barStatus()} />
      </div>
    );
  }

});

module.exports = HourBar;