const { fetchMyIP, printPassTimes, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(body => console.log(JSON.parse(body)));

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(JSON.parse(body)));


fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(JSON.parse(body)));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })


