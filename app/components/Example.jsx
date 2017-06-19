var React = require('react');
var {Link} = require('react-router');
// var Example = React.createClass({
// render: function () {
//   return (
//     <h3>Examples are Here</h3>
//   )
// }
// });

var Example = (props) => {
  return (
    <div>
    <h1 className="text-center">Examples </h1>
    <p>Reference places you can check for Weather</p>
    <ol>
        <li>
          <Link to='/?location=Deoria'>Deoria, India</Link>
        </li>
        <li>
          <Link to='/?location=Noida'>Noida, India</Link>
        </li>
    </ol>
  </div>
  )

};
module.exports = Example;
