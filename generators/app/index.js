'use strict';

var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_docker-compose.yml'),
        this.destinationPath('docker-compose.yml')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
//    this.npmInstall();
  }
});

