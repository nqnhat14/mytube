// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    bacon: Number,
    cheese: Number,
    meat: Number,
    salad: Number
});

IngredientSchema.virtual('date')
    .get(() => this._id.getTimestamp());

mongoose.model('Ingredient', IngredientSchema);

