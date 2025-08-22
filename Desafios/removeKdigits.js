function removeKdigits(num, k) {
    let results = new Set();
    let queue = [num]; 

    for (let i = 0; i < k; i++) {
        let nextQueue = new Set();
        
        for (let currentNum of queue) {
            for (let j = 0; j < currentNum.length; j++) {
                let newNum = currentNum.slice(0, j) + currentNum.slice(j + 1);
                nextQueue.add(newNum.replace(/^0+/, '') || "0");
            }
        }

        queue = Array.from(nextQueue);
    }

    results = queue;
    return [...results].sort((a, b) => Number(a) - Number(b))[0];
}

console.log(removeKdigits("1432219", 3)); // Output: "1219"
//console.log(removeKdigits("10200", 1));   // Output: "200"
//console.log(removeKdigits("10", 2));      // Output: "0"