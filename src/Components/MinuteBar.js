var React = require('react');

var MinuteBar = React.createClass({
  propTypes: {
    currentMinute: React.PropTypes.number,
    barStatus: React.PropTypes.string
  },
  render: function() {
    return (
      <div className={'clock--minuteBar'}>

      </div>
    );
  }

});

module.exports = MinuteBar;