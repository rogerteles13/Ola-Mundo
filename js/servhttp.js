const http = require("http")
http.createServer(function (req, res){
    res.end("teste ervidor HTTP")
}).listen(8081)
console.log("O servidor está ok") 
