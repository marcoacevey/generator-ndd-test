'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
          'Welcome to the first-rate ' + chalk.red('NddTest') + ' generator!'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            this.fs.copy(
              this.templatePath('_package.json'),
              this.destinationPath('package.json')
            );
            this.fs.copy(
              this.templatePath('_bower.json'),
              this.destinationPath('bower.json')
            );
            this.fs.copy(
                this.templatePath('_bug.jpg'),
                this.destinationPath('bug.jpg')
            );
            this.fs.copy(
                this.templatePath('_index.html'),
                this.destinationPath('index.html')
            );
        },

        projectfiles: function () {
            this.fs.copy(
              this.templatePath('editorconfig'),
              this.destinationPath('.editorconfig')
            );
            this.fs.copy(
              this.templatePath('jshintrc'),
              this.destinationPath('.jshintrc')
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});
