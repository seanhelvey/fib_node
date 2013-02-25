/*
seanhelvey
node.js fibonacci calculator
pass n as get request parameter

editor:
var port = xxxx;
var ip = y.y.y.y;

terminal:
node fib_node.js

browser:
http://localhost:xxxx/?n=10
*/

var port = process.env.PORT || 5000;
var ip = '0.0.0.0';
var http = require('http');

http.createServer(function (req, res) {
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	var n = query['n'];

	res.writeHead(200, {'Content-Type': 'text/plain'});

	//avoid favicon.ico request
	if (typeof n != 'undefined') {
	    res.write(fib(n) + '\n');
	}

	res.end('\n');

}).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port + '/');

function fib(n){
    if(n == 0 || n == 1){
	return n;
    } else {
	return fib(n-1) + fib(n-2);
    }
}