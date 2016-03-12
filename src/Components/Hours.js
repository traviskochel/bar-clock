var React = require('react');
var _ = require('underscore');
var HourBar = require('./HourBar');

var Hours = React.createClass({
  propTypes: {
    currentHour: React.PropTypes.number,
    currentMinute: React.PropTypes.number,
  },
  renderHourBars: function(){
    var hourBars = []
    var _this = this;
    _.times(12, function(hour){
      hourBars.push(
        <HourBar 
          key={'hour-' + hour}
          index={hour}
          currentHour={_this.props.currentHour}
          currentMinute={_this.props.currentMinute} />
      );
    });
    return hourBars;
  },
  render: function() {
    return (
      <div className='clock--hours'>
        {this.renderHourBars()}
      </div>
    );
  }

});

module.exports = Hours;