// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    ingredients:{
        bacon:Number,
        cheese:Number,
        meat:Number,
        salad:Number,
    },
    orderData:{
        country: String,
        deliveryMethod: String,
        email: String,
        name: String,
        street: String,
        zipCode: String,

    },
    price:String,
    userId:String
});

OrderSchema.virtual('date')
    .get(() => this._id.getTimestamp());

mongoose.model('Order', OrderSchema);

