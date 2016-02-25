'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {

      var tpl = this.templatePath.bind(this);
      var dst = this.destinationPath.bind(this);

      var opts = {
        name: this.options.name || 'NAME_ME',
        framework: this.options.framework || 'hapi'
      };

      if (opts.framework === 'express') {
        this.fs.copy(tpl('_express.index.js'), dst('index.js'));
        this.fs.copyTpl(tpl('_express.package.json'), dst('package.json'), opts)
        this.fs.copyTpl(tpl('_express.services.js'), dst('services.js'), opts);
      } else {
        this.fs.copy(tpl('_index.js'), dst('index.js'));
        this.fs.copyTpl(tpl('_package.json'), dst('package.json'), opts)
        this.fs.copyTpl(tpl('_services.js'), dst('services.js'), opts);
      }

      this.fs.copy(tpl('test/_siteTest.js'), dst('test/siteTest.js'));
    },

    projectfiles: function () {
      this.fs.copy(this.templatePath('_gitignore'),
                   this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('_Dockerfile'),
                   this.destinationPath('Dockerfile'));
      this.fs.copy(this.templatePath('_jshintrc'),
                   this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('_istanbul.yml'),
                   this.destinationPath('.istanbul.yml'));
    }
  },

  install: function () {
    this.npmInstall();
  }
});
