const express = require('express');
const config = require('./server/config/config');
const glob = require('glob');
const mongoose = require('mongoose');

mongoose.connect(config.db,{ useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
    throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/server/models/*.js');
models.forEach(function (model) {
    console.log(model);
    require(model);
});
const app = express();

require('./server/config/express')(app, config);
require('./server/config/passport')();


app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
});