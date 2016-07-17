var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers['accept-language'].split(',')[0];
    var software = req.headers['user-agent'].match(/\(([^)]+)\)/)[1];
    
    res.send({
        'ipaddress': ip,
        'language': language,
        'software': software
    });
});

app.listen(port);