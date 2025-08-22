var isSquare = function(n){
  
    if(n === 0) {return true}
    let root = Math.sqrt(n)
    root = Math.floor(root)

    if(root * root === n) {
        return true;
    }

    return false;
}

isSquare(79)