'use strict';

let express = require('express');
let cors = require('cors');
let path = require('path');
let events = require('./eventsController');
let bodyParser = require('body-parser');

let app = express();
let rootPath = path.normalize(__dirname + '/../');

// // allow CORS
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // // Set to true if you need the website to include cookies in the requests sent
//   // // to the API (e.g. in case you use sessions)
//   // res.setHeader('Access-Control-Allow-Credentials', true);

//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//   next();
// });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

let corsOptions = {
  origin: ['http://angularjs:5000','http://127.0.0.1:5000'],
  credentials: true
};

app.get('/data/event', cors(corsOptions), events.getAll);
app.get('/data/event/:id', cors(corsOptions), events.get);
app.post('/data/event/:id', cors(corsOptions), events.save);

app.listen(5000, function () {
  console.log('listening on port 5000...');
});

