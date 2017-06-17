var React = require('react');

// var WeatherMessege = React.createClass({
// render: function () {
//   var {temp, location} = this.props ;
//   return (
//         <h3>It is {temp} in {location}. </h3>
//   )
// }
// });


var WeatherMessege = ({temp , location}) => {
    return (
          <h3>It is {temp} in {location}. </h3>
    )
  }


module.exports = WeatherMessege;
