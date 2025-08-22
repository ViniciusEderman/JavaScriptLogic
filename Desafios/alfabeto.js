function check(number) {

    if(number <= 0 || number > 26) {
        return 'the number must be between 1 and 26';
    }

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const result = alphabet.slice(0, number);
    console.log(result);

    return result;
}

check(10)
