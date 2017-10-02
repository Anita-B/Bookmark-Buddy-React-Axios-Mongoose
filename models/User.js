var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
// Require password-hash only if using HASH instead of BCRYPT!:
// var Hash = require('password-hash');
// Create Schema class
var Schema = mongoose.Schema;

// Create user/site schema
var userSchema = new Schema({
  
  fullname: {
    type: String,
    trim: true,
    required: "Full Name field is required."
  },

  email: {
    type: String,
    required: "E-mail is required.",
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be at least 6 characters."
    ]
    // ,
    // set: function(newValue) {
    // return Hash.isHashed(newValue) ? newValue : Hash.generate(newValue);}
  },

  sites: [{
      type: Schema.Types.ObjectId,
      ref: "Site"
    }]

});

// hash the password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};



// USE THIS BELOW IF USING HASH INSTEAD OF BCRYPT:
// UserSchema.statics.authenticate = function(email, password, callback) {
//   this.findOne({ email: email }, function(error, user) {
//     if (user && Hash.verify(password, user.password)) {
//       callback(null, user);
//     } else if (user || !error) {
//       // Email or password was invalid (no MongoDB error)
//       error = new Error("Your email address or password is invalid. Please try again.");
//       callback(error, null);
//     } else {
//       // Something bad happened with MongoDB. You shouldn't run into this often.
//       callback(error, null);
//     }
//   });
// };

// Create the User model with the UserSchema
var User = mongoose.model("User", userSchema);

// Export the models
module.exports = User;


