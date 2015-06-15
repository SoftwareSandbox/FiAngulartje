'use strict';

// ng-annotate tries to make the code safe for minification automatically
// by using the Angular long form for dependency injection.
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '../../.tmp/concat/scripts',
            src: ['*.js', '!oldieshim.js'],
            dest: '../../.tmp/concat/scripts'
        }]
    }
};