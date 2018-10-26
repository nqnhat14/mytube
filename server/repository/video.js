const mongoose = require('mongoose');
const Video = mongoose.model('Video');
const Promise = require('bluebird');
Promise.promisifyAll(mongoose);
module.exports = {
    saveVideo: (videoData) => {
        return new Promise((resolve, reject) => {
            const video = new Video(videoData)
            video.saveAsync().then(vi => {
                console.log(vi);
                resolve(vi);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
    },
    getVideos: (type) => {
        return new Promise((resolve, reject) => {
            let queryOption = {};
            let sortOption = {};
            if (type === "lasted") {
                const today = new Date();
                const lastMonth = new Date(today.getFullYear(),today.getMonth()-1,today.getDate());
                console.log(lastMonth);
                queryOption = {UploadedDate:{$gte:lastMonth}}
            } else if (type === "mostViewed") {
                console.log('mostViewed');
                queryOption = {View:{$gte:1000}}
            }
            else if (type === "sport") {
                
            }
            else if (type === "featured") {
                queryOption = {Featured:true};
                sortOption = {Large:-1};
            }
            Video.find(queryOption).sort(sortOption).execAsync().then(videos => {
                resolve(videos);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
    }
};