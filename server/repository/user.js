const mongoose = require('mongoose');
const User = mongoose.model('User');
const Promise = require('bluebird');
Promise.promisifyAll(mongoose);
module.exports = {
    createUser: (userData) => {
        return new Promise((resolve, reject) => {
            User.findOneAsync({ userName: userData.userName })
                .then(usr => {
                    if (usr)
                        return reject({ message: 'Email already exist' });
                    const user = new User(userData);
                    user.save()
                        .then(usr => {
                            resolve(usr);
                        })
                        .catch(err => {
                            reject(err);
                        });
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })

        })

    }
}