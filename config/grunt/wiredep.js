'use strict';

// Automatically inject Bower components into the app
module.exports = {
    app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
    }
};