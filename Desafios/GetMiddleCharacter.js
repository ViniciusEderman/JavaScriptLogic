function getMiddle(s){

    let divisor = 0;
    let caracters = "";

    if(s.length % 2 === 0) {
        divisor = Math.floor(s.length / 2);
        divisor = divisor - 1;
        caracters = s[divisor] 
        caracters += s[divisor + 1] 
        
        return caracters;
    } else {
      divisor = Math.floor(s.length / 2);
      caracters = s[divisor]
      return caracters;
    }
}

//getMiddle("testing") // test impar
getMiddle("test") // par