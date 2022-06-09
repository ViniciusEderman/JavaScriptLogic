
const express = require('express');
const app = express();
const port = 8000; // porta de acesso ao serv 

//rota do serv:
app.get('/' , (req, res) => {
    res.send('Rota funcionando');
});

//teste de outra rota:
app.get('/olamundo' , (req, res) => {
    res.send('<h1>Teste nova rota</h1>')
});

app.listen(port , () => {  //iniciando o servidor, criação de uma arrow function
    console.log("Servidor funcionando");
});