/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 

v1 = x
v2 = y
v3 = z

se v1 > v2 e v1 > v3
 mostrar -> v1 é o maior 
se v2 > v1 e v2 > v3
 mostrar -> v2 é o maior
senao
 v3 é o maior

*/

 //agora vamos pra o codigo:

 let v1 = 10;
 let v2 = 30;
 let v3 = 99;

 if(v1 > v2 && v1 > v3) {
    console.log(`v1 é o maior: ${v1}`);
 }
 if(v2 > v1 && v2 > v3) {
    console.log(`v2 é o maior: ${v2}`);
 }
 else {
    console.log(`v3 é o maior: ${v3}`);
 }
 