function ArrayGame() {

    let array = [1, 2, 3, 18, 60, 80 ,99];
        
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    
}

ArrayGame();

function randomNumber(randomNumber) {

    this.randomNumber = randomNumber;

    randomNumber = Math.floor(Math.random() * 256);

    console.log(randomNumber);
}

randomNumber();