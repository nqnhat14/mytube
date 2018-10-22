/**
 * Created by My-PC on 9/13/2016.
 */
const express = require('express');
const router = express.Router();
const videoRepo = require('../repository/video');

module.exports = function (app) {
    app.use('/api', router);
};
router.post('/video',(req,res)=>{
    const videoData = req.body;
    console.log(videoData);
    videoRepo.saveVideo(videoData).then(video =>{
        res.send(video);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
