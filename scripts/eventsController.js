'use strict';

let fs = require('fs');

module.exports.get = function(req, res, next) {
    console.log('get: ' + req.params.id);
    
    let event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');    
    res.send(event);
};

module.exports.save = function(req, res, next) {
    let event = req.body;
    fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
}

module.exports.getAll = function(req, res, next) {
    console.log('Get all');
    
    let path = 'app/data/event/';

    let files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e)
        res.send('[]');
    }
    let results = "[";
    for (let idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";
           
    res.send(results);
};
