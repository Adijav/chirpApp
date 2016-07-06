//create a schema using mongoose

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hashed password
	created_at: {type: Date, default:Date.now}
});

var postSchema = new mongoose.Schema({
	text: String,
	created_by: String,
	created_at: {type: Date, default:Date.now}
});

//declare model for User and Post having userSchema and postSchema

mongoose.model('User',userSchema);
mongoose.model('Post',postSchema);