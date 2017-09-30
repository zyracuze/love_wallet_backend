var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var helloSchema = new Schema({
  message: String,
});

// the schema is useless so far
// we need to create a model using it
var Hello = mongoose.model('Hello', helloSchema);

// make this available to our users in our Node applications
module.exports = Hello;