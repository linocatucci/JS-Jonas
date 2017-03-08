// Advanced JavaScript:
// object old style
// Function constructor

var john = {
    name: 'John',
    LastName: 'Miller',
    isMarried: false,

};
console.log(john);


// Function Constructor to create a object, here the Person object.
// function called person, with a capital

var Person = function (name, yearOfbirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2016 - this.yearOfbirth)
    }
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfbirth);
}


var John = new Person('John', 1990, 'teacher');
var Jane = new Person('Jane', 1972, 'designer');
var Mark = new Person('Mark', 1968, 'programmer');
John.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(John);
console.log(Jane);

// eigen gemaakt objecten met de function constructor

var Car = function (brand, type, PK, engine, color, yearOfBuild, aanschafPrijs) {
    this.brand = brand;
    this.type = type;
    this.PK = PK;
    this.engine = engine;
    this.color = color;
    this.yearOfBuild = yearOfBuild;
    this.aanschafPrijs = aanschafPrijs;
}

Car.prototype.calculateEndLeaseContract = function (yearOfBuild) {
    console.log(yearOfBuild + 5);
}

Car.prototype.calculateBelasting = function (aanschafPrijs) {

    this.belasting = ((aanschafPrijs / 100) * 21);
    console.log(this.belasting);

}

var OpelAstra = new Car('Opel', 'AstraK', 140, 'Diesel', 'blue', 2017, 32000);
console.log(OpelAstra);

OpelAstra.calculateEndLeaseContract(2017);
OpelAstra.calculateBelasting(32000);

var Bike = function (brand, type, price, color) {
    this.brand = brand;
    this.type = type;
    this.price = price;
    this.color = color;
}

var juliaFiets = new Bike('Gazelle', 'heavyDuty', 700, 'lightBlue');

Bike.prototype.calculateMonthlyPayment = function () {

    this.zakgeld = 10;
    var months = 12
    this.monthlyPayments = ((this.price / months) / this.zakgeld);
    console.log(this.monthlyPayments);
}

Bike.prototype.message = function (message) {

    console.log(message);
}

console.log(juliaFiets);
juliaFiets.calculateMonthlyPayment();
juliaFiets.message('Zaterdag gaat julia haar fiets ophalen Jieeeeihaaaaaaa!');
console.log(juliaFiets.brand + ' ' + juliaFiets.type);

var linoFiets = new Bike('Focus', 'racefiets', 2000, 'wit met zwart');
console.log(linoFiets);

linoFiets.calculateMonthlyPayment();
linoFiets.message('Lino gaat de ronde van NoordHolland rijden');