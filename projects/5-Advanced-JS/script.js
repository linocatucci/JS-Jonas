/*

// function constructor

// traditional
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// object constructor is a pattern for a object blueprint

function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// adding methods and functions to the function constructor prototype property
// prototype property of our function constructor
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

// can also be done with properties but is NOT common
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('jane', 1971, 'designer');

var mark = new Person('Mark', 1970, 'developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


//eigen object:

function Car(brand, type, engine, PK, color, price) {
    this.brand = brand;
    this.type = type;
    this.engine = engine;
    this.PK = PK;
    this.color = color;
    this.price = price;
};

Car.prototype.calculateYearlyCost = function () {
    console.log((this.price / 100 * 21) * 0.4);
};


var Audi_4_Benz = new Car('audi', 'A4', 'TFSI', 140, 'Blue', 40000);
var Audi_4_Diesel = new Car('audi', 'A4', 'TDI', 160, 'Black', 40000);
var Opel_Astra = new Car('Opel', 'Astra', 'TDI', 140, 'Blue', 32000);


Audi_4_Diesel.calculateYearlyCost();

console.log('Pk? ' + Audi_4_Diesel.PK);

Opel_Astra.calculateYearlyCost();
console.log(Opel_Astra)
console.log(Opel_Astra.PK + '  ' + Opel_Astra.color + ' ' + Opel_Astra.engine + ' ' + ' total cost per year: ' + Opel_Astra.calculateYearlyCost());

console.log(Opel_Astra.calculateYearlyCost());
*/


// Object.create, another way to create an object.

var personProto = {
    calculateAge: function () {
        console.log(2016 - yearOfBrith);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// or with jane, directly in the Object.create with an extra parameter name:value

var jane = Object.create(personProto, {
    name: {
        value: 'jane'
    },
    yearOfBirth: {
        value: 1971
    },
    job: {
        value: 'designer'
    }

});