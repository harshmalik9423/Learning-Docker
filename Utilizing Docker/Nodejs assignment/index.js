var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("NodeJS app initiated");
	res.end();
}).listen(3000);

var process = require('process')
process.on('SIGINT', () => {
  console.info("SIGINT Recieved")
  process.exit(0)
})