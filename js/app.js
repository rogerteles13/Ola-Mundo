//console.log ("hello word!")

const express = require("express")
const app = express()

//contruindo a rota para o servidor express

app.get("/", function(req, res){
    res.sendfile(__dirname + "/html/index.html")
})

app.get("/", function(req, res){
    res.send("<h1>Seja bem vindo ao servidor construido com o Express</h1>")
})

//servidor atravé do express//sempre no final do código
app.listen(8081, function(){
    console.log ("servidor rodando")
    }) 
