const mongoose = require('mongoose');
const Video = mongoose.model('Video');
const Promise = require('bluebird');
Promise.promisifyAll(mongoose);
module.exports = {
    saveVideo:(videoData)=>{
        return new Promise((resolve,reject)=>{
            const video = new Video(videoData)
            video.saveAsync().then(vi =>{
                console.log(vi);
                resolve(vi);
            }).catch(err=>{
                console.log(err);
                reject(err);
            })
        })
    },
    getVideos:(type)=>{
        return new Promise((resolve,reject)=>{
            Video.findAsync().then(videos =>{
                resolve(videos);
            }).catch(err=>{
                console.log(err);
                reject(err);
            })
        })
    }
};