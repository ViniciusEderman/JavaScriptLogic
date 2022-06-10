
const express = require('express');
const nodemailer  = require('nodemailer');
const app = express();
const port = 8000; // porta de acesso ao serv 

//rota do serv:
app.get('/' , (req, res) => {
    email.sendMail({

        from: 'vinicius ederman <vinicius-edermanmc@hotmail.com>',
        to: 'layssa.lms0@gmail.com',
        subject: 'Hi, teste do meu serv',
        text: 'Te amo gatona'
    
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    }); 
    res.send('Rota funcionando');
});

//teste de outra rota:
app.get('/olamundo' , (req, res) => {
    res.send('<h1>Teste nova rota</h1>')
});

app.listen(port , () => {  //iniciando o servidor, criação de uma arrow function
    console.log("Servidor funcionando");
});

let email = nodemailer.createTransport({

    host: 'smtp-mail.outlook.com', 
    secureConnection: false, 
    port: 587, 
    auth: {
        user: 'vinicius-edermanmc@hotmail.com',
        pass: '6267257Hh'
    },
    tls:{
        ciphers:'SSLv3'
    }
}); 

/*email.sendMail({

    from: 'vinicius ederman <vinicius-edermanmc@hotmail.com>',
    to: 'layssa.lms0@gmail.com',
    subject: 'Hi, teste do meu serv',
    text: 'Te amo gatona'

}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
}); */