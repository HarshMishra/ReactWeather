var React = require('react');


var WeatherMessege = ({temp , location}) => {
    return (
          <h3>It is {temp} in {location}. </h3>
    )
  }


module.exports = WeatherMessege;
