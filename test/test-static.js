'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('fuge:static', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/static'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'proxy.js',
      'index.js',
      'templates.js'
    ]);
  });
});
