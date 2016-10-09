QUnit.module('JSHint | routes/songs.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/songs.js should pass jshint.\nroutes/songs.js: line 13, col 16, \'$\' is not defined.\n\n1 error');
});
