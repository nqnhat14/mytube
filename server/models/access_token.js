const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccessTokenSchema = new Schema({
    token:String,
    userId:Schema.Types.ObjectId,
    clientId:String,
    // expirationDate:Date
});
AccessTokenSchema.virtual('date')
    .get(() => this._id.getTimestamp());
mongoose.model('AccessToken',AccessTokenSchema);