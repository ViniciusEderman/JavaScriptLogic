
class Movie {

    //attributes + constructor:
    constructor(title, year, movieGenre, ) {
        this.title = title;
        this.year = year;
        this.movieGenre = movieGenre;
        this.actors = [];
    }

    //methods:
    Play() {
        console.log("reproducing...");
    }

    Pause() {
        console.log("pausing...");
    }

    NextPlay() {
        console.log("next movie...");
    }

    Close() {
        console.log("closing...");
    }
}

// accessing a class
const theGodFather = new Movie();

theGodFather.title = 'The God Father Part 1';
theGodFather.year = 1972;
theGodFather.movieGenre = 'police thriller';
theGodFather.actors = ['Al Pacino', 'Robert De Niro', 'Marlon Brando'];
console.log(theGodFather.title);
console.log(theGodFather.actors);
