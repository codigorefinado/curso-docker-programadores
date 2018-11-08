const express = require('express');

const PORT = 3000;

// Para o docker entender que deve fornecer o acesso externo, não apenas dentro da rede interna do docker
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Ola Mundão!');
});

app.listen(PORT, HOST);

console.log('Executando...   ' + HOST + ':'+ PORT);