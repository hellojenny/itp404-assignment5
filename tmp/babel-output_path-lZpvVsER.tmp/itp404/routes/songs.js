define('itp404/routes/songs', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		// model is a keyword in the template
		model: function model() {
			// this is an array
			// return [
			// 	{name: 'David'},
			// 	{name: 'Andrew'}
			// ];

			// this is a promise
			return $.ajax({
				url: 'http://itp-api.herokuapp.com/songs'
			}).then(function (json) {
				return json.songs;
			});
		}
	});
});