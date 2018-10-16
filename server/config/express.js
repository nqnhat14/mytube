const express = require('express');
const cors = require('cors');
const glob = require('glob');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const path = require('path');
const router = express.Router();
const passport = require('passport');
module.exports = function(app, config) {
    const env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';
    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compress());
    app.use(express.static(path.join(config.root, 'build')));
    app.use(methodOverride());
    app.use(passport.initialize());
    app.use(passport.session());

    const controllers = glob.sync(config.root + '/server/controllers/*.js');
    controllers.forEach(function (controller) {
        require(controller)(app);
    });

    //Default router
    app.use('/', router);
    router.get('*', function (req, res) {
        res.sendFile(path.join(__dirname,'../../build/index.html'));
    });


    // Other router
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if(app.get('env') === 'development'){
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.send({
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    }

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: {},
            title: 'error'
        });
    });

};
