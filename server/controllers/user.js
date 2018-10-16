/**
 * Created by My-PC on 9/13/2016.
 */
const express = require('express');
const router = express.Router();

const oauth2 = require('../oauth2');
const passport = require('passport');
const userRepo = require('../repository/user');
module.exports = function (app) {
    app.use('/api', router);
};
router.post('/token', oauth2.token);
router.post('/test', passport.authenticate('basic'), function (req, res, next) {
    res.send()
});
router.post('/signup', (req, res, next) => {
    const userData = req.body;
    console.log(userData);
    userRepo.createUser(userData)
        .then(usr => {
            res.send(usr);
        })
        .catch(err => {
            res.status(500).send(err);

        })
});