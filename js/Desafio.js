const vector = ["Luana", "Lucas", "Carlos", "Mariana", "Carlos", "Jhuan", "David"];

const hasFemaleNames = vector.filter(function(name) {
    return name.includes("female");
  });

const feminineNames = hasFemaleNames.map(function(name) {
    return name;
});

console.log(feminineNames); 
