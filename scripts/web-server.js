'use strict';

let express = require('express');
let cors = require('cors');
let path = require('path');
let events = require('./eventsController');
let bodyParser = require('body-parser');

let app = express();
let rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

// let corsOptions = {  
//   allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
// };

// app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Content-Type", "application/json");
  next();
});

app.all('/data/event', events.getAll);
app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.get('*', function (req, res) {
  res.sendFile(`${rootPath}/app/index.html`);
})

app.listen(5000, function () {
  console.log('listening on port 5000...');
});

