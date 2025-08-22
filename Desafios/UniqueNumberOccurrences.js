var uniqueOccurrences = function (arr) {
  let mapping = {};
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    if (mapping[arr[i]]) {
      mapping[arr[i]] += 1;
    } else {
      mapping[arr[i]] = 1;
    }
  }

  let occurrences = Object.values(mapping);
  let uniqueOccurrences = new Set(occurrences);

  return uniqueOccurrences.size === occurrences.length;
};

uniqueOccurrences([1,2]);