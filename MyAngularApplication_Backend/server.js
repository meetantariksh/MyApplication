var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./paths/index');
var profiles = require('./paths/profile');
var financialInformation = require('./paths/financialInformation');

var port = 3500;

var app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index);
app.use('/api', profiles);
app.use('/fi', financialInformation);

app.listen(port, function(){
    console.log('Server started on port '+port);
});