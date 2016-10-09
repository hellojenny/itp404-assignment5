import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact-us', function() {
    this.route('billing');
    this.route('tech-support');
  });
  this.route('songs');
  this.route('reddit');
  this.route('search', function() {
    this.route('results', { path: ':term' }); // latter part is called "dynamic segment" (variable in URL)
  });
  this.route('artists', function() {
    this.route('artist', { path: ':id' });
  });
});

export default Router;
