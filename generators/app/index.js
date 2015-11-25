'use strict';

var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {
      this.fs.copy(this.templatePath('_compose-dev.yml'), this.destinationPath('compose-dev.yml'));
      this.fs.copy(this.templatePath('_fuge-config.js'), this.destinationPath('fuge-config.js'));
    },

    projectfiles: function () {
      this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    }
  },

  install: function () {
//    this.npmInstall();
  }
});

