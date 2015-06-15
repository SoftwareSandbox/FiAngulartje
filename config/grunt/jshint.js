'use strict';

// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: {
        src: [
            'Gruntfile.js',
            '<%= yeoman.app %>/scripts/{,*/}*.es6'
        ]
    },
    test: {
        options: {
            jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.es6']
    }
};
