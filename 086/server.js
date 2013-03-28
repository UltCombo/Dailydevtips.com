//Entenda o motivo desse 'use strict' aqui
//http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
//vai ajudar numa série de coisas, uma delas é suporte nativo a JSON
"use strict";

//título do processo
process.title = 'server';

//a porta que o servidor ouvirá
var port = 1337;

//fazemos a requisição dos módulos...

//http, com tudo que é necessário para server e client
//do protocolo http
var http = require('http');

//url, com o que é necessário para resolução e parsing de urls
var url = require("url");

//node-static, você pode precisar instalar através de 'npm install node-static'.
//basicamente vai entender as requisições GET que fizermos
var st = require('node-static');

//criamos um servidor de arquivos...
var fileServer = new st.Server();

//criamos um servidor de arquivos usando um método da variável 'http'
//esse método recebe um callback com 'request' e 'response' como argumentos

var server = http.createServer(function(request, response) {

    //adicionamos um evento a request, ou seja quando tivermos 'end',
    //no final da requisição, o callback que passamos como segundo parâmetro
    //será executado...

    request.addListener('end', function () {
        //adicionamos um console para ver toda a requisição para uma url específica
        //não esqueça que isso aparecerá no console do Node, não do seu browser
        console.log(request.url);

        //chamamos o método 'serve' de 'fileServer' passando 'request' e 'response'
        //como argumento
        fileServer.serve(request, response);
    });
});

server.listen(port, function() {
    //chamamos o método 'listen' de 'server' para indicarmos a porta
    //que será ouvida e passamos o callback a ser executado

    //Veja a mensagem no console do Node
    console.log((new Date()) + " Node rodando na porta " + port);
});