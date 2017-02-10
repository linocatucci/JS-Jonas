// advanced javascript again.
/*
console.log('test with vs code');

// constructor acts like a blueprint.

// Function constructor

// old way to declare an object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// new way: via function constructor 
// met hoofdletter bij constructors!

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');

console.log(john);
console.log(john.job);

john.calculateAge();
var jane = new Person('jane', 1971, 'developer');
var mark = new Person('mark', 1938, 'designer');
console.log(jane);
jane.calculateAge();
mark.calculateAge();

// Primitives vs. Objects
// primitives krijgen een copy van de waarde, bij objecten wordt er een
// gemaakt.

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
*/

// functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
    console.log(a);
};

// de primitive wordt als copy in de functie gezet, het object als referentie
// vandaar dat age 27 blijft en de city van het object verandert.

change(age, obj);
console.log(age);
console.log(obj.city);

// passing functions as arguments

var years = [2001, 1965, 1988, 2003, 1956];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// call back functions
function calculateAge(el) {
    return 2016 - el;
}

function fullAge(el) {
    if (el >= 18) {
        console.log(el + ' is ouder dan 18');
    } else {
        console.log(el + ' is niet ouder dan 18');
    }
}

function maxHearthRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, fullAge);
var rates = arrayCalc(ages, maxHearthRate);
console.log(rates);