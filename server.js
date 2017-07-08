var request = require('request');
var url ='https://requestb.in/1icwwoy1'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});