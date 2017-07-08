var request = require('request');
var url ='https://floating-reef-87288.herokuapp.com/'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});