// app.get('/login', function(req, res, next) {
//   console.log("Login work?");
//   var errors = req.flash('error');

//   // req.flash('success', 'You can add messages by including a second parameter with the function.');
  
//   // ... respond to the request ...
// });

 // // Using the passport.authenticate middleware with our local strategy.
 //  // If the user has valid login credentials, send them to the add Flashcards page.
 //  // Otherwise the user will be sent an error
 //  app.post("/api/login", passport.authenticate("local"), function(req, res) {
 //    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
 //    // So we're sending the user back the route to the home page because the redirect will happen on the front end
 //    // They won't get this or even be able to access this page if they aren't authed
 //    res.json("/create");
 //  });


// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error

// app.post("/api/signup", function(req, res) {
//   //console.log("Got to /api/signup");
//   User.save({
//     fullname: req.body.fullname,
//     email: req.body.email,
//     password: req.body.password
//   }).then(function() {
//     res.json("/create");
//     //res.redirect(307, "/create");
//   }).catch(function(err) {
//     console.log(" ");
//     console.log("Signup error due to duplicate entry: " + err);
//     console.log(" ");
//     res.send("Error_duplicate_entry_Use_back_browser_arrow_to_return_to_Login_page");
//     //res.send("/signup");
//     //res.json(err);
//     //res.status(422).json(err.errors[0].message);
//   });
// });

// app.post("/api/signup", function(req, res) {
//   var newUser = new User({
//     fullname: req.body.fullname,
//     email: req.body.email,
//     password: req.body.password
//   });
//   // Using the save method in mongoose, we create our example user in the db
//   newUser.save(function(error, doc) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Or log the doc
//     else {
//       console.log(doc);
//       res.send(doc);
//     }
//   });
// });