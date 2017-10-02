var express = require("express");

var urlController = require("../controllers/urlController");

var router = new express.Router();


//console.log("********************* GOT TO apiRoutes.js *********************");

// Get all quotes (or optionally a specific quote with an id)
//router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
//router.post("/quotes", quotesController.create);
// Update an existing quote with a speicified id param, using data in req.body
//router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
//router.delete("/quotes/:id", quotesController.destroy);


// Get all urls for a user
router.get("/url/:id?", urlController.index);
// Create a new url using data passed in req.body
router.post("/url", urlController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/url/:id", urlController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/url/:id", urlController.destroy);


router.post("/api/add", function(req, res) {
   console.log("test add!!!")
});

// router.get("/api/search", function(req, res) {
//   console.log("test search!!!")
// });


module.exports = router;

