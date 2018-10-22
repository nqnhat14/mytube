/**
 * Created by My-PC on 9/13/2016.
 */
const express = require('express');
const router = express.Router();

const oauth2 = require('../oauth2');
const passport = require('passport');
const userRepo = require('../repository/user');
const orderRepo = require('../repository/order');
module.exports = function (app) {
    app.use('/api', router);
};
router.post('/token', oauth2.token);
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
router.get('/test',(req,res)=>{
    orderRepo.getOrders().then(orders =>{
        res.send(orders);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})