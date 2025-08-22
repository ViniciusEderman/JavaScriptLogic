const hIndex = function(citations) {

    let hIndex = 0;
    const ordernedCitations = citations.sort((a, b) => b - a);

    for(let i = 0; i < ordernedCitations.length; i++) {
        if(hIndex < ordernedCitations[i]) {
            hIndex += 1;
        } else {
            return hIndex;
        }
    }

    return hIndex;
};

console.log(hIndex([1]));