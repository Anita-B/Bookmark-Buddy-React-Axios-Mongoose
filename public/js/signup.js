$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var fullnameInput = $("input#name-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  

  // When the signup button is clicked, we validate the email, password, and fullname are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      fullname: fullnameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // console.log("fullname: " + userData.fullname);

    if (!userData.fullname || !userData.email || !userData.password) {
      $("#alert .msg").text("All fields cannot be left empty. Please try again.");
      $("#alert").fadeIn(500);
      return;
    }
    // If we have an email, password, and fullname, run the signUpUser function
    signUpUser(userData.fullname, userData.email, userData.password);
    fullnameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the Create Flashcards page
  // Otherwise we log any errors
  function signUpUser(fullname, email, password) {
    $.post("/signup", {
      fullname: fullname,
      email: email,
      password: password
      
    }).then(function(data) {
       window.location = "/";
      // window.location.replace('/', data);
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(function(err) {
      console.log("Signup error: " + err);
      $("#alert .msg").text("Incorrect input. Please try again.");
      $("#alert").fadeIn(500);
    });
  }

});
  
