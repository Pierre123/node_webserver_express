const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-type': 'application/json'
    });
    let salida = {
        nombre: 'Pierre',
        edad: 26,
        url: request.url
    }
    response.write(JSON.stringify(salida));
    response.end();

}).listen(8080);


console.log('Escuchando puerto 8080');