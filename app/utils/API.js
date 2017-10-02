import axios from "axios";

const API = {
	//Searches all url's in the db
	searchUrls: function(search) {
		console.log("API search url: ", search);
		return axios.get("/api/search", { search });
	},
	//Retrieves all url's from the db
	getUrls: function() {
		return axios.get("/usersites");
	},
	// Adds a new url to the db
	addUrl: function(title, category, url, screenshot, note) {
		console.log("add url: ");
		return axios.post("/api/add", { title, category, url, screenshot, note });
	},
	// Deletes a url from the db
	deleteUrl: function(id) {
		return axios.delete(`/api/urls/${id}`);
	},
	// Toggles a url's favorite property in the db
	favoriteUrl: function(url) {
		url.favorited = !url.favorited;
		const { _id, favorited } = url;
		return axios.patch(`/api/urls/${_id}`, { favorited });
	},
	loadPage: function(cookie) {
		return axios.get("/account");
	}
};

export default API;	