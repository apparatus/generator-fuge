'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('seneca-http:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/service'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'service.js'
    ]);
  });
});
