define('itp404/components/song-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		tagName: 'li',
		isExplicit: _ember['default'].computed('song.trackExplicitness', function () {
			if (this.get('song.trackExplicitness') === 'explicit') {
				return true;
			} else {
				return false;
			}
		})
	});
});