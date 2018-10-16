const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Promise = require("bluebird");
Promise.promisifyAll(mongoose);
module.exports = {
    getOrders:()=>{
        return new Promise((resolve,reject)=>{
            Order.findAsync()
                .then(orders=>{
                    resolve(orders);
                }).catch(err=>{
                console.log(err);
                reject(err);
            })
        })
    },
    saveOrder:(orderData)=>{
        const order = new Order(orderData);
        return new Promise((resolve,reject)=>{
            order.saveAsync()
                .then(order=>{
                    resolve(order);
                }).catch(err=>{
                reject(err);
            })
        })
    }
};