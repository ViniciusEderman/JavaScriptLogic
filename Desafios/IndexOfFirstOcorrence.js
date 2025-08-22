var strStr = function(haystack, needle) { 
    
    let regex = new RegExp(needle); 
    let matchRegex = haystack.search(regex);

    console.log(matchRegex)
    return matchRegex;
};

strStr("abcbcabc", "abc");