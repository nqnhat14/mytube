/**
 * Created by My-PC on 9/13/2016.
 */
const express = require('express');
const router = express.Router();
const orderRepo = require('../repository/order');

const oauth2 = require('../oauth2');
const passport = require('passport');
module.exports = function (app) {
    app.use('/api', router);
};
router.post('/token', oauth2.token);
router.get('/orders',passport.authenticate('bearer'),(req,res,next)=>{
    orderRepo.getOrders().then(orders=>{
        res.send(orders);
    }).catch(err=>{
        res.status(500).send(err.message);
    })
});
router.post('/orders',(req,res,next)=>{
    const orderData = req.body;
    orderRepo.saveOrder(orderData).then(order=>{
        res.send(order);
    }).catch(err=>{
        res.status(500).send(err);
    })
});
// router.post('/test',passport.authenticate('basic'), function(req,res,next){
//     res.send()
// });