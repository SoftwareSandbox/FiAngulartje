'use strict';

module.exports = {
    options: {
        sourceMap: false
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/scripts/',
            src: ['{,*/}*.es6'],
            dest: '<%= yeoman.app %>/scripts/',
            ext: '.js'
        }]
    },
    tests: {
        files: [{
            expand: true,
            cwd: 'test/spec',
            src: ['{,*/}*.es6'],
            dest: 'test/spec/',
            ext: '.js'
        }]
    }
};