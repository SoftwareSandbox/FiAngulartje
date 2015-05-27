'use strict';

var express = require('express');
var app = express();
app.context = '/app';

var server = app.listen(9000, function() {
    var port = server.address().port;

    console.log('FiAngulartje server listening on port %s', port);
});

app.use('/', express.static(__dirname));
app.use('/bower_components', express.static('./bower_components'));