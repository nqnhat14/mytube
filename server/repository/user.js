const mongoose = require('mongoose');
const User = mongoose.model('User');
const Promise = require('bluebird');
Promise.promisifyAll(mongoose);
module.exports = {
    createUser:(userData)=>{
        return new Promise((resolve,reject)=>{
            const user = new User(userData);
            user.save()
            .then(usr =>{
                resolve(user);
            })
            .catch(err=>{
                reject(err);
            });
        })
        
    }
}