'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('fuge:rest', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/rest'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'index.js',
      'services.js'
    ]);
  });
});
