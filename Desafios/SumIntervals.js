function sumIntervals(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let calc = 0;
    let position = 0;
  
    for (let i = 0; i < sortedIntervals.length; i++) {
      if (sortedIntervals[position][1] >= sortedIntervals[i][0]) {
        sortedIntervals[position][1] = Math.max(
          sortedIntervals[position][1],
          sortedIntervals[i][1]
        );
      } else {
        position++;
        sortedIntervals[position] = [...sortedIntervals[i]];
      }
    }
  
    
   for (let c = 0; c <= position; c++) {
      calc += sortedIntervals[c][1] - sortedIntervals[c][0];
    }
    return calc;
  }

sumIntervals([
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11],
]);
