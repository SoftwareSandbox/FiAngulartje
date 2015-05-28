// Generated on 2014-11-25 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    var appConfig = require('./config/grunt/appConfig'),
        watch = require('./config/grunt/watch'),
        babel = require('./config/grunt/babel'),
        connect = require('./config/grunt/connect'),
        stubby = require('./config/grunt/stubby'),
        jshint = require('./config/grunt/jshint'),
        clean = require('./config/grunt/clean'),
        autoprefixer = require('./config/grunt/autoprefixer'),
        wiredep = require('./config/grunt/wiredep'),
        filerev = require('./config/grunt/filerev'),
        cdnify = require('./config/grunt/cdnify'),
        copy = require('./config/grunt/copy'),
        concurrent = require('./config/grunt/concurrent'),
        karma = require('./config/grunt/karma'),
        useminPrepare = require('./config/grunt/useminPrepare'),
        usemin = require('./config/grunt/usemin'),
        imagemin = require('./config/grunt/imagemin'),
        svgmin = require('./config/grunt/svgmin'),
        htmlmin = require('./config/grunt/htmlmin'),
        ngAnnotate = require('./config/grunt/ngAnnotate');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        yeoman: appConfig,
        watch: watch,
        babel: babel,
        connect: connect,
        stubby: stubby,
        jshint: jshint,
        clean: clean,
        autoprefixer: autoprefixer,
        wiredep: wiredep,
        filerev: filerev,

        useminPrepare: useminPrepare,
        usemin: usemin,
        imagemin: imagemin,
        svgmin: svgmin,
        htmlmin: htmlmin,

        ngAnnotate: ngAnnotate,

        cdnify: cdnify,

        copy: copy,

        // Run some tasks in parallel to speed up the build process
        concurrent: concurrent,

        karma: karma
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        if (target === 'integrate') {
            return grunt.task.run(['build', 'configureProxies:integrate', 'connect:integrate:keepalive']);
        }
        if(target === 'deploy') {
            return grunt.task.run(['configureProxies:deploy', 'connect:deploy:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'babel:dist',
            'wiredep',
            'configureProxies:livereload',
            'concurrent:server',
            'autoprefixer',
            'stubby',
            'connect:livereload',
            'watch',
            'clean:generatedJs'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'babel:dist',
        'babel:tests',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma',
        'clean:generatedJs',
        'clean:generatedTestJs'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'babel:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'clean:generatedJs'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
