//require express

var express = require('express');
var app = express();

 app.set('port', (process.env.PORT || 5000));

 app.use(express.static('public'));

  app.listen(app.get('port'), function() {
  console.log('Up Up and Away!!');
});

//file location
  var sendFiles = {root: __dirname};
//sending of the files
  app.get("/", function(req, res) {
  res.status(200).sendFile("vote_tracker.html", sendFiles);
});

app.get('/secret', function (req, res) {
  res.status(200).sendFile("secret.html", sendFiles);
});

app.use(function(req, res) {
  res.status(404).sendFile("error.html", sendFiles);
});





