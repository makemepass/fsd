var http=require('http');
const path = require('path');
var options={
    hostname:'localhost',
    port:5000,
    path:'/1.txt',
};
function handleResponse(response){
    var serverData='';
    response.on('data', function (chunk) {
        serverData+=chunk;
    });
    response.on('end', function () {
        console.log(serverData);
    });
}
http.request(options, function (response) {
    handleResponse(response);
}).end();