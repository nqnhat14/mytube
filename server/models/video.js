// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    Title:String,
    UploadedBy:String,
    View:Number,
    UploadedDate:Date,
    Source:String,
    Image:String,
    Featured:Boolean,
    BigImage:String,
    SmallImage:String,
    Description:String,
    VideoLink:String
});

videoSchema.virtual('date')
    .get(() => this._id.getTimestamp());

mongoose.model('Video', videoSchema);

