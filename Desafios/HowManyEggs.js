function egged(year,span) { 
    if(year === 0) { 
        return "No chickens yet!" 
    };

    // ano 1 
    let dictionary = {
       1: { count: 3, lifeTime: span, production: 300 },
    };

    for(let currentYear = 2; currentYear <= year; currentYear++) {
        for(let index in dictionary) {
            if(dictionary[index].lifeTime > 0) {
                dictionary[index].lifeTime -= 1;
                dictionary[index].production = Math.floor(dictionary[index].production * 0.8);
      
            }
        }

        for (let index in dictionary) {
            if (dictionary[index].lifeTime <= 0) {
                delete dictionary[index]; // remove as galinhas que morreram
            }
        }

        // adiciona novas galinhas por ano
        dictionary[currentYear] = { count: 3, lifeTime: span, production: 300 };
    }

    let result = 0;
    
    for(let index in dictionary) {
        result = result + dictionary[index].count * dictionary[index].production;
    }

    return result;
}   

egged(4,8);
