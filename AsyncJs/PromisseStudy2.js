

function sendMail(body, get) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const error = true; // deu erro  

          if(!error) {
            + resolve()
            
          }else {
            + reject()
            
          }
        }, 4000)
    });
}

sendMail("body email..........", "para alguem: vinicius").then(() => {
    console.log("Email enviado com sucesso");
}).catch(console.log("Email não enviado"));


/* desafio 1 */ 

pegarId().then((id) => {
    
})
console.log("FIM");

console.log("Inicio!");

async function PegarId(id){
  await buscarEmailNoBanco(id).then((email) => { 
    enviarEmail("Olá, como vai?",email).then(() => {
        console.log("Email enviado, para o usuário com id: " + id)
    }).catch(err => {
        console.log(err);
    })
  })
}