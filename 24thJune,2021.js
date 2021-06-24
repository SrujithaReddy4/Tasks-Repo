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
c1.area();

//------------------------------------------------------------------------------------

class Uberfare {
    calculatefar() {
        var Passenger_RideFare = this.BaseFare + (this.ridedistance * this.time_of_ride) + this.booking_fee;
        console.log("Uber cab fare for the ride:" + Passenger_RideFare);
    }
}

var uf = new Uberfare();
uf.BaseFare = 90;
uf.ridedistance = 50;
uf.time_of_ride = 20;
uf.booking_fee = 10;
uf.calculatefar();

//---------------------------------------------------------------------------
class Person {
    details() {
        console.log("Name:" + this.name);
        console.log("Age:" + this.age);
        console.log("Proffession:" + this.proffession);
        console.log("DOB:" + this.dob);
        console.log("Phoneno:" + this.phoneno);
        console.log("Email:" + this.email);

    }

}

let c1 = new Person();
c1.name = "Srujitha Reddy";
c1.age = 24;
c1.proffession = "Student";
c1.dob = "04th-November";
c1.phoneno = 92345678901;
c1.email = "estybu@gdy.com"
c1.details();
