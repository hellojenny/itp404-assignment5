define('itp404/routes/artists/artist', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			console.log(params);
			var url = 'http://itp-api.herokuapp.com/api/artists/' + params.id + '/songs';
			var promise = $.getJSON(url);
			return promise;
		},
		afterModel: function afterModel(model) {
			console.log(model);
		}
	});
});