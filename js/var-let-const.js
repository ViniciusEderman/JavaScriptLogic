// neste arquivo mostrarei na apresentação do trabalho o que seria a dferença entre var, let e const:

const name = "X";

function sayName() {
    let name = "Y";
    console.log(`O nome é: ${name}`);
}

if(true) {
   let name = "Z"; 
   //name = "zk";
   console.log("O nome é:" + name);
}

console.log(`O nome é: ${name}`);
sayName();

/*const anoNascimento = 2002;

let idade = 20;

idade = 21;

anoNascimento = 2003; */ 
