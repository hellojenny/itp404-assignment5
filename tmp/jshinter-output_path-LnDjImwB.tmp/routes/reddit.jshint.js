QUnit.module('JSHint | routes/reddit.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/reddit.js should pass jshint.\nroutes/reddit.js: line 6, col 16, \'$\' is not defined.\n\n1 error');
});
