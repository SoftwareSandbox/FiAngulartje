'use strict';

// Watches files for changes and runs tasks based on the changed files
module.exports = {
    bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
    },
    js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
    },
    babel: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.es6'],
        tasks: ['newer:babel:prod'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
    },
    jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
    },
    babelTest:{
        files: ['test/spec/{,*/}*.es6'],
        tasks: ['newer:babel:tests']
    },
    styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= yeoman.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }
};