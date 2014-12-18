'use strict';

/*
 Service that contains constants to use with our $resource definitions
*/

angular.module('fiAngulartjeApp')
  .service('Fiazard', [function () {
    var protocol,
        host,
        port;
    protocol = 'http://'; // if you change this to https, make sure you modify the stubby config in Gruntfile.js also to use https!
    host = 'localhost';
    port = '8090'; //port defined by stubby in Gruntfile.js
    return {
        baseurl: protocol + host + ':' + port + '/'
    };
    // return {baseurl: ''};
  }]);
