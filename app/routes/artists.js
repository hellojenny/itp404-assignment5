import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		document.title="Artists";
	},
	model: function(params) {
		console.log(params);
		var url = 'http://itp-api.herokuapp.com/api/artists';
		var promise = $.getJSON(url);
		return promise;
	},
	afterModel: function(model) {
		console.log(model);
	}
});
