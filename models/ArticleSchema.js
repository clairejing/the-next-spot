//create mongoose
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/thenextspot');
var Schema = mongoose.Schema;

//Create a Schema for articles
var ArticleSchema = new Schema({
  title: String,
  summary: String,
  image: String,
  author: String,
  date: String
});
mongoose.model('Article', ArticleSchema);
var Article = mongoose.model('Article');

module.exports = mongoose.model('Article');