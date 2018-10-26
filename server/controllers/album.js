/**
 * Created by My-PC on 9/13/2016.
 */
const express = require('express');
const router = express.Router();
const videoRepo = require('../repository/video');
module.exports = function (app) {
    app.use('/api', router);
};
router.get('/getAlbum', (req, res) => {
    const type = req.query.type;
    videoRepo.getVideos(type)
        .then(videos => {
            res.send({
                [type]: videos
            });
        })
        .catch(err => {
            res.status(500).send(err);
        })
})
