var gcdOfStrings = function (str1, str2) {
  const possiblePrefix = {};

  for (let i = 2; i <= str2.length; i++) {
    const prefix = str2.slice(0, i);
    possiblePrefix[prefix] = 0;
  }

  for (let i = 0; i < str1.length; i++) {
    for (const prefix in possiblePrefix) {
      const prefixLength = prefix.length;

      if (str1.slice(i, i + prefixLength) === prefix) {
        possiblePrefix[prefix]++;
      }
    }
  } 

  console.log(possiblePrefix)

  let highPrefixKey = null;
  let highPrefixValue = -Infinity;

  for (const prefix in possiblePrefix) {
    const currentValue = possiblePrefix[prefix];

    if (currentValue > highPrefixValue) {
      highPrefixValue = currentValue;
      highPrefixKey = prefix;
    } else if (
      currentValue === highPrefixValue &&
      prefix.length > highPrefixKey.length
    ) {
      highPrefixKey = prefix;
    }
    if(possiblePrefix[prefix] === 0) {return ""};
  }

  return highPrefixKey;
};

console.log(gcdOfStrings("LEET", "CODE"));
