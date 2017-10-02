var express = require("express");
var path = require("path");


var User = require("../models/User.js");
var Site = require("../models/Site.js");


var apiRoutes = require("./apiRoutes");

var router = new express.Router();

var urlController = require("../controllers/urlController");

// Use the apiRoutes module for any routes starting with "/api"
// router.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });




// Routes =============================================================
module.exports = function(app) {

// app.post("/api/add", function(req, res) {
//    console.log("test add!!!", req.body);
//    urlController.create(req, res);
// });


// Bookmark Buddy home page
app.get("/", function(req, res) {

 console.log('Cookies: ', req.cookies);
 User.findOne({_id: req.cookies.loggedin}, function(err, user) {

  if (user){
    res.sendFile(path.join(__dirname, "../public/index.html"));
    return user;
  }
  else {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    return false;
  }
})

});


// Signup page
app.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});


// Login page
app.get("/login", function(req, res) {
  User.findOne({_id: req.cookies.loggedin}, function(err, user) {

  if (user){
    res.sendFile(path.join(__dirname, "../public/index.html"));
    return user;
  }
  else {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    return false;
  }
})
});


  // Route for logging user out
app.get("/logout", function(req, res) {
  res.clearCookie('loggedin');
  // res.send('Cookie deleted');
  // req.logout();
  res.redirect("/");
});



app.post('/signup', function(req, res) {
  var newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password
  });

  res.cookie("loggedin", newUser._id);
  newUser.password = newUser.generateHash(newUser.password);

  newUser.save(function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the site back to the browser
    // This will fire off the success function of the ajax request
    else {

      res.sendFile(path.join(__dirname, "../public/index.html"));
      
      console.log("SUCCESS!  SIGNED UP - AND ASSIGNED COOKIE!");
    }




    // newUser.save();
   
    
  })

  
});



app.post('/login', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {

    if (!user.validPassword(req.body.password)) {
      //password did not match
      // console.log("Login error: " + err);
      // $("#alert .msg").text("Incorrect email and/or password. Please try again.");
      // $("#alert").fadeIn(500);
      console.log("NOT A VALID USER.");
    } else {
      //create cookie called "loggedin"
      res.cookie("loggedin", user._id);
      // res.cookie("loggedin" , "testing", {expire : new Date() + 9999});
      console.log("SUCCESSFULLY LOGGED IN!")
      // res.redirect("/");
      res.send("ok");
      // password matched. proceed forward
    }
  });
});



// Handle form submission to add new site, save submission to mongo
app.post("/api/add", function(req, res) {
  console.log(req.body);
  var newSite = new Site(req.body);

  // Insert the site into the sites collection
  newSite.save(function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the site back to the browser
    // This will fire off the success function of the ajax request
    else {
      User.findOneAndUpdate({"_id": req.cookies.loggedin }, { $push: { "sites": doc._id } }, { new: true }, function(error, doc) {
        if (error) {
          res.send(error);
        }
        else {
          res.send(doc);
        }
      });
    }
  });
});


// Route to see what user looks like WITH populating
app.get("/usersites", function(req, res) {
  // Set up a query to find all of the entries in our User database..
  User.findOne({"_id": req.cookies.loggedin})
    // ..and string a call to populate the entry with the sites stored in the user's site array
    .populate("sites")
    // Now, execute that query
    .exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
        // res.sendFile(path.join(__dirname, "../public/signup.html"));
      }
      // Or, send our results to the browser, which will now include the sites stored in the specific user document
      else {
        // res.send(doc); - this sends user info as well as user specific sites:
        // res.send(doc);
        // This displays all site data for user:

        var allSites = doc.sites;

        // res.send(doc[0].sites);

        // var userUrls = [];

        // for (var i = 0; i < allSites.length; i++) {
          
        //   userUrls.push(allSites[i].url);
        // }
        // console.log(userUrls);
        console.log(allSites);
        // res.send(userUrls);
        res.send(allSites);
      }
    });
});


// Route for getting some data about our user to be used client side
app.get("/account", function(req, res) {

User.findOne({_id: req.cookies.loggedin}, function(err, user) {

  if (user){
    res.send(user.fullname + " / " + user.email);
  }
  else {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  }
})

  // if (!req.user) {
  //   // The user is not logged in, send back an empty object
  //   res.json({});
  // } else {
  //   // Otherwise send back the user's email and id
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     fullname: req.user.fullname,
  //     email: req.user.email,
  //     // password: req.user.password,
  //     _id: req.user._id
  //   });
  // }

});



// Route to see what our user data looks in the browser
app.get("/user/:id", function(req, res) {

  User.update({_id: req.cookies.loggedin}, {
    // Set updated user info once user edits their profile:
    $set: { "fullname": req.params.fullname, "email": req.params.email, "password": req.params.password }
  },
  // When that's done, run this function
  function(error, edited) {
    // show any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the result of our update to the browser
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});



// Update fields of a site saved
app.get("/updatesite/:id", function(req, res) {
  // Update a doc in the "sites" collection with an ObjectId matching
  // the id parameter in the url
  Site.update({
    "_id": mongojs.ObjectId(req.params.id)
  }, {
    // Set updated parameters for the site we specified
    $set: { "url": req.params.url, "title": req.params.title, "category": req.params.category, "note": req.params.note, "screenshot": req.params.screenshot }

  },
  // When that's done, run this function
  function(error, edited) {
    // Show any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the result of our update to the browser
    else {
      console.log(edited);
      res.send(edited);
    }
  });

});


// Delete One from the DB
app.get("/delete/:id", function(req, res) {
  // Remove a site using the objectID
  Site.remove({
    "_id": mongojs.ObjectID(req.params.id)
  }, function(error, removed) {
    // Log any errors from mongojs
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the mongojs response to the browser
    // This will fire off the success function of the ajax request
    else {
      console.log(removed);
      res.send(removed);
    }
  });
});


//end of module.exports function:
};



// module.exports = router;
