const mongoose = require('mongoose');
const Ingredient = mongoose.model('Ingredient');
const Promise = require('bluebird');

module.exports = {
    getIngredient:()=>{
        return new Promise((resolve,reject)=>{
            Ingredient.findOne().then(ing =>{
                resolve(ing);
            }).catch(err=>{
                reject(err);
            })
        })
    }
};