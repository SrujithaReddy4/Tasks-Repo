class Movie {
    Movie(title, studio, rating) {
        this.getPG();
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG() {
        if (this.rating === 0) {
            return this.rating = 'PG';
        } else {
            return this.rating;
        }
    }
}
var m1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
m1.getPG();




//----------------------------------------------------------------------------------------

class Circle {
    area() {
        var aR = Math.PI * this.radius * this.radius
        console.log("Area:" + aR);
    }
    circumference() {
        var cR = Math.PI * this.radius * 2;
        console.log("circumferenec:" + cR)
    }
}

let c1 = new Circle();
c1.radius = 2;
c1.circumference();

