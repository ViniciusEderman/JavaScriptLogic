function main(n){

    let index = 1;
    let result = [];

	while(n >= index) {
        if(index % 3 === 0 && index % 5 === 0) {
            result.push("DesenvolvimentoSoftware");
        }
        else if(index % 3 === 0 && index % 5 !== 0) {
            result.push("Desenvolvimento");
        }
        else if(index % 3 !== 0 && index % 5 === 0) {
            result.push("Software");
        } else {
            result.push(index);
        }
        index++
    }
    console.log(result.join(', '))
}

main(5)