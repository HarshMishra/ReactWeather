var axios = require('axios') ;

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d1639bf077584348596b3e9ec3db1c5b&units=imperial';

//d1639bf077584348596b3e9ec3db1c5b
module.exports = {
getTemp: function (location){
  var encodedLocation = encodeURIComponent(location) ;
  var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestURL).then(function(res){
  if (res.data.cod && res.data.message)
  {
    throw new Error(res.data.message);
  }
  else {
    return res.data.main.temp ;
  }
  }, function (res) {
  throw new Error(res.data.message);
    });
  }
  }
