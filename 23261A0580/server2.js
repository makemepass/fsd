var http=require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('Sai krihsna !');
    res.end();


}).listen(8080, function () {
    console.log("Server is running on port 8080...");
});