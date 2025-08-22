function searchNames(logins) {
  let result = [];

  for(let i = 0; i < logins.length; i++) {
    let word = logins[i][0];
    

    for(let c = 0; c < word.length; c++) {
        if(word[c] === '_') {
         result.push(word, logins[i][1]
         )
        }
    }
  }

  result =[result];
  console.log(result);
}

const logins = [
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
  ["baz_", "baz@baz.com"],
  ["qux", "qux@qux.com"],
];
searchNames(logins);
