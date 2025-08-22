function main(numeros, objetivo){
	
    let result = [];

    for(let i = 0; i < numeros.length; i++) {
        for(let j = i + 1; j < numeros.length; j++) {
            if(numeros[i] + numeros[j] === objetivo) {
                result.push(i, j);
                console.log(result)
                return result.sort((a, b) => a - b);
            }
        }
    }
}

main([2, 7, 11, 15], 9);