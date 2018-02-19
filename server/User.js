const  mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
displayName : String ,
photoUrl : String ,
firstName : String,
lastName : String ,
topics :[{
  text: String,
}],

posts: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Blog'
 },



});

module.exports = mongoose.model('User', UserSchema);
