define('itp404/tests/routes/search/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/search/results.js should pass jshint.\nroutes/search/results.js: line 11, col 23, \'$\' is not defined.\n\n1 error');
  });
});