var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className="text-center">About</h1>
    <p>This is weather application built on React.
      I have built this for The Complete Web developer course.</p>
       <p>
         Here are tools that has been used ...
       </p>
       <ul>
         <li>
           <a href="https://facebook.github.io/react">React</a> - This was
           the javascript framework used
         </li>
         <li>
           <a href="http://openweathermap.org">Open weather map </a> - Open wether map was used
           to search for weather data by city name
         </li>
          </ul>
  </div>
  )
};

module.exports = About;
