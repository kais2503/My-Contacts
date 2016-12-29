var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var contact = new Schema({
  name:  String,
  phone: String,
  email:String

});

module.exports =mongoose.model('contact',contact);
