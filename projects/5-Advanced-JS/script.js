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
Person.prototype.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    };

// can also be done with properties but is NOT common
Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher');

var jane = new Person ('jane', 1971, 'designer');

var mark = new Person ('Mark', 1970, 'developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


//eigen object:

function Car (brand, type, engine, PK, color, price){
    this.brand = brand;
    this.type = type;
    this.engine = engine;
    this.PK = PK;
    this.color = color;
    this.price = price;
};

Car.prototype.calculateYearlyCost = function(){
    console.log((price / 100 * 21) * 0.4)  
};







