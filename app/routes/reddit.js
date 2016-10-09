import Ember from 'ember';

export default Ember.Route.extend({
	// model is a keyword in the template
	model: function() {
		return $.ajax({
			url: 'https://www.reddit.com/r/showerthoughts.json'
		}).then(function(json) {
			return json.data.children;
		});
	}
});
