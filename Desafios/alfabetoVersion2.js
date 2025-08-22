function check(n) {

    if(n <= 0 || n > 26) {
        return 'the number must be between 1 and 26';
    }

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let result = [];

    for (let i = 0; i < n; i++) {
       result.push(alphabet[i])
    }

    console.log(result)
}

check()
