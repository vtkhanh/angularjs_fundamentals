'use strict';

let fs = require('fs');

module.exports.get = function (req, res) {
    console.log('get:' + req.params.id);
    
    let event = fs.readFileSync(`app/data/event/${req.params.id}.json`, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
}

module.exports.save = function (req, res, next) {
    console.log('post:' + req.params.id);
    
    let event = req.body;
    
    console.log('event:' + JSON.stringify(event));
        
    fs.writeFileSync(`app/data/event/${req.params.id}.json`, JSON.stringify(event));
        
    res.send(`event created`);
    
    next();
}