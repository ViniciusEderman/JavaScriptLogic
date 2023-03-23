
let num = 2;
let numTesteNotPrimo = 15;
let divisores = 0;

for(let i = 1; i <= num; i++) {
    if(numTesteNotPrimo % i == 0) {
        divisores++;
    }
}

if(divisores == 2) {
    console.log(`O numero é primo`);
}
else {
    console.log(`O numero não é primo`);
}
