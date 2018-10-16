const express = require('express');
const router = express.Router();
const ingRepo = require('../repository/ingredient');
module.exports = function (app) {
    app.use('/api', router);
};

router.get('/ingredient',(req,res,next)=>{
    ingRepo.getIngredient().then(ing=>{
        res.send(ing);
    }).catch(err=>{
        res.status(500).send(err);
    })
});