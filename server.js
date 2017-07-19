"use strict";

var fs = require('fs');  
var path = require('path');  
var http = require('http');

var staticBasePath = './static';
var staticBasePath2 = './';

var staticServe = function(req, res) {  
    var fileLoc = path.resolve(staticBasePath2);
    fileLoc = path.join(fileLoc, req.url);
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            res.write('\n' + req.url);
            return res.end();
        }
        res.statusCode = 200;
        res.write(data);
        return res.end();
    });
};

var httpServer = http.createServer(staticServe);
httpServer.listen(8080); 

// node server.js