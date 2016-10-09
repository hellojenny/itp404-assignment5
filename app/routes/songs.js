import Ember from 'ember';

export default Ember.Route.extend({
	// model is a keyword in the template
	model: function() {
		// this is an array
		// return [
		// 	{name: 'David'},
		// 	{name: 'Andrew'}
		// ];

		// this is a promise
		return $.ajax({
			url: 'http://itp-api.herokuapp.com/songs'
		}).then(function(json) {
			return json.songs;
		});
	}
});
