function a1_thick_and_hearty(a1, a2) {
    const lengthA1 = a1.length;
    const lengthA2 = a2.length; 
    const filtredArr = a1.filter(num => a2.includes(num));
    let result = [];
    
    for(let i=0; i < filtredArr.length; i++) {
      for(let c = i + 1; c < filtredArr.length; c++) {
        if (filtredArr[i] + filtredArr[c] === lengthA1 || 
            filtredArr[c] - filtredArr[i] === lengthA2) {
            result.push(filtredArr[i]); 
            result.push(filtredArr[c]); 
        }
      }
    }
  
    const filtredResult = result.filter((num, index) => result.indexOf(num) === index);
    return filtredResult;
}

a1_thick_and_hearty([1, 2, 3, 5, 10, 15], [1, 2, 3, 4, 5, 6, 10, 12, 15, 16]);