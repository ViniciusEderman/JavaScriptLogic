function dashatize(num) {
    //transformamos num em string
    let numStr = num.toString();
    //criamos um array vazio auxiliar
    let arr = [];

    //esse for percorre o numStr, ent teremos 8 6 3 2 0 separadamente(indexizado)
    for (let i = 0; i < numStr.length; i++) {
        // aqui conseguimos pegar somente os numeros dps da posição 0 e antes do ultimo(penultimo) no caso 632 (desconsideramos o 8 e o 0)
        if (i > 0 && i < numStr.length - 1) { 

            // currentNum seria o valor inteiro de 6 3 2 
            let currentNum = parseInt(numStr[i]);

            // o numero anterior o current, assim conseguimos implicar na logica dos - para impares e não haver o - para pares
            let prevNum = parseInt(numStr[i - 1]);

            //aqui verificamos a paridade dos numeros 
            if (currentNum % 2 === 0 && prevNum % 2 === 0) {
                //se os dois são pares, inserimos eles no array
                arr.push(numStr[i]);
            } else {
                // se não são pares, inserimos os valores preceditos de um - 
                arr.push('-');  
                arr.push(numStr[i]);
            }
            // aqui inserimos o valores inicial e final do numero, no caso 8 e 0 para o numero testado
        } else {
            arr.push(numStr[i]);
        }
    }
    console.log(arr.join(''));
    return arr.join('');
}

dashatize(274)