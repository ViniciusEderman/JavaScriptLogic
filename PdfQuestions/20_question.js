 /*
 Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 
 */

 let v1 = 90;
 let v2 = 15;

 if(v1 != v2) {
    let temp = v1;

    v1 = v2;
    v2 = temp;
    
    console.log(`Valores em ordem crescente: ${v1}, ${v2}`)
 }
 else {
    console.log('Os valores são identicos');
 }
 
 // Outra forma de fazer:

 let value1 = 150;
 let value2 = 35;

 if(value1!= value2) {
    if(value1 > value2) {
        console.log(`Ordem: ${value1}, ${value2}`);
    }else if(value2 > value1) {
        console.log(`Ordem: ${value2}, ${value1}`);
    }
 }
 else {
    console.log('Os valores são identicos');
 }
