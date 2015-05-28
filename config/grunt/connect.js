'use strict';

var proxies = require('./proxies'),
    appConfig = require('./appconfig'),
    proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

// The actual grunt server settings
module.exports = {
    options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
    },
    livereload: {
        proxies: [proxies.proxyForStubby],
        options: {
            open: true,
            middleware: function (connect) {
                // if (!Array.isArray(options.base)) {
                //     options.base = [options.base];
                // }
                // var middlewares = [ proxyForStubby ];

                // // Serve static files.
                // options.base.forEach(function(base) {
                //     middlewares.push(connect.static(base));
                // });

                // // Make directory browse-able.
                // var directory = options.directory || options.base[options.base.length - 1];
                // middlewares.push(connect.directory(directory));

                // return middlewares;
                return [
                    proxySnippet,
                    connect.static('.tmp'),
                    connect().use(
                        '/bower_components',
                        connect.static('./bower_components')
                    ),
                    connect.static(appConfig.app)
                ];
            }
        }
    },
    deploy: {
        options: {
            port: 80,
            hostname: '0.0.0.0'
        }
    },
    test: {
        proxies: [proxies.proxyForStubby],
        options: {
            port: 9001,
            middleware: function (connect) {
                return [
                    proxySnippet,
                    connect.static('.tmp'),
                    connect.static('test'),
                    connect().use(
                        '/bower_components',
                        connect.static('./bower_components')
                    ),
                    connect.static(appConfig.app)
                ];
            }
        }
    },
    dist: {
        options: {
            open: true,
            base: '<%= yeoman.dist %>'
        }
    },
    integrate: {
        proxies: [proxies.proxyForDropwizard],
        options: {
            open: true,
            base: '<%= yeoman.dist %>',
            middleware: function (connect, options) {
                return [
                    // Include the proxy first
                    proxySnippet,
                    // Serve static files.
                    connect.static(String(options.base)),
                    // Make empty directories browsable.
                    connect.directory(String(options.base))
                ];
            }
        }
    }
};
