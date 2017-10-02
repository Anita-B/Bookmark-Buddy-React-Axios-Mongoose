$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email, password, and displayname entered
  loginForm.on("submit", function(event) {
    console.log("-----loginForm----");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      $("#alert .msg").text("All fields cannot be left empty. Please try again.");
      $("#alert").fadeIn(500);
      return;
    }
    console.log("AFTER loginForm");
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us to the Main page to Search/Add
  function loginUser(email, password) {
    $.post("/login", {
      email: email,
      password: password
    }).then(function(data) {
      console.log("-----POST - Replaced (data)----");
      // window.location.href = data.redirect;
      window.location = "/";
      // If there's an error, log the error
    }).catch(function(err) {
      console.log("Login error: " + err);
      $("#alert .msg").text("Incorrect email and/or password. Please try again.");
      $("#alert").fadeIn(500);
    });
  }

});


// var passwordHash = require('./lib/password-hash');

// var hashedPassword = 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97';
    
// console.log(passwordHash.verify('password123', hashedPassword)); // true
// console.log(passwordHash.verify('Password0', hashedPassword)); // false