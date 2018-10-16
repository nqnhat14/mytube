const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//var mongoose = require('mongoose');
//var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
const ClientSchema = new Schema({
    name:String,
    clientId:String,
    clientSecret:String,
    isTrusted:Boolean
});

ClientSchema.virtual('date')
    .get(() => this._id.getTimestamp());

mongoose.model('Client', ClientSchema);