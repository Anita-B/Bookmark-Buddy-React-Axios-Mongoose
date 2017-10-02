var url = require("../models/Site");

module.exports = {

	//console.log("********************* GOT TO urlController.js *********************");
	// This method handles retrieving sites from the db
	index: function(req, res) {
		var query;
		if (req.query) {
		  query = req.query;
		}
		else {
		  query = req.params.id ? { _id: req.params.id } : {};
		}
		url.find(query)
		  .then(function(doc) {
		    res.json(doc);
		  }).catch(function(err) {
		    res.json(err);
		  });
	},
	// This method handles creating new urls
	create: function(req, res) {
		url.create(req.body).then(function(doc) {
		  res.json(doc);
		}).catch(function(err) {
		  res.json(err);
		});
	},
	// This method handles updating urls
	update: function(req, res) {
		url.update({
		  _id: req.params.id
		},
		  req.body
		).then(function(doc) {
		  res.json(doc);
		}).catch(function(err) {
		  res.json(err);
		});
	},
	// This method handles deleting urls
	destroy: function(req, res) {
		url.remove({
		  _id: req.params.id
		}).then(function(doc) {
		  res.json(doc);
		}).catch(function(err) {
		  res.json(err);
		});
	}
};

