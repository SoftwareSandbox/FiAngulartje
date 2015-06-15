'use strict';

module.exports = {
    stubsServer: {
        files: [{
            src: ['stubs/*.{json,yaml,js}']
        }],
        options: {
            stubs: 8090,
            relativeFilesPath: 'stubs/'
        }
    }
};