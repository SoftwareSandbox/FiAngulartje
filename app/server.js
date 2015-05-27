'use strict';

var express = require('express');
var app = express();
app.context = '/app';

var server = app.listen(9000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('FiAngulartje server listening at http://%s:%s', host, port);
});

app.use('/', express.static('./'));
app.use('/bower_components', express.static('./bower_components'));