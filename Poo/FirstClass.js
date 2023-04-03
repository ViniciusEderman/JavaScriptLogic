
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
