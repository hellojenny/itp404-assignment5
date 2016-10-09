import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		search: function(e) {
			e.preventDefault();
			console.log('form submitted');
			// alert(this.get('searchTerm'));
			var searchTerm = this.get('searchTerm');
			this.transitionToRoute('search.results', searchTerm); // var searchTerm fulfills first parameter as specified in router.js
		}
	}
});
