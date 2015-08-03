// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname + "/public")).listen(8080);

// var connect = require('connect');
// var serveStatic = require('serve-static'); 
// var app = connect(); 

// app.use(serveStatic('/public')); 

// app.listen(8000);

var connect = require('connect');
var http = require('http');
var st = require('st');

var app = connect()
    .use(st('public'));

http.createServer(app).listen(8000);