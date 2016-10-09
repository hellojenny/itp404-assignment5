define('itp404/tests/controllers/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/artists.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/artists.js should pass jshint.');
  });
});