'use strict';

// Proxy configuration so that requests of our Angular Services that go to http://localhost:9000/api/...  get redirected to the configured proxy.
// When we use stubby to mock out our back-end it will serve our stubbed api at localhost:8090/api, and
// when we want to run vs our actual back-end, dropwizard will serve at localhost:8080/api.
module.exports = {
    proxyForStubby: {
        context: '/api',
        host: 'localhost',
        port: 8090,
        https: false
    },
    proxyForDropwizard: {
        context: '/api',
        host: 'localhost',
        port: 8080,
        https: false,
        rewrite: {
            '^/api': ''
        }
    }
};