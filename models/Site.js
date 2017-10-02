// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var SiteSchema = new Schema({

  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: "Undefined"
  },
  note: {
    type: String
  },
  screenshot: {
    type: String
  },
  logo: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }

});


// Create the Site model with the SiteSchema
var Site = mongoose.model("Site", SiteSchema);

// Export the model:
module.exports = Site;