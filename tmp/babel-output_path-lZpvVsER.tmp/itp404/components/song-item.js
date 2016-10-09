define('itp404/components/song-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		isPopular: _ember['default'].computed('song.playCount', function () {
			return this.get('song.playCount') > 20;
		}),
		isPricey: _ember['default'].computed('song.price', function () {
			return this.get('song.price') > 1;
		})

		// isExplicit: Ember.computed('song.trackExplicitness', function() {
		// 	if (this.get('song.trackExplicitness') === 'explicit') {
		// 		return true;
		// 	}
		// 	else {
		// 		return false;
		// 	}
		// })

		// for song-item.hbs:
		// {{#if isExplicit}}
		// 	<img src="http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/032013/parental_advisory.jpg?itok=A1aALj7Q" width="20" alt="">
		// {{/if}}
	});
});