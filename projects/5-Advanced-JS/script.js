// advanced javascript again.

console.log('test with vs code');

// constructor acts like a blueprint.

// Function constructor

// old way to declare an object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

console.log(john.yearOfBirth);

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

/*
var a = 23;
var b = a; // copy van a. Geen referentie!
a = 46;
console.log('dit is primitive a ' + a);
console.log('dit is de copy van a die in b is gezet ' + b);

var obj1 = {
    name: 'john',
    age: 26
};
// referentie dus wanneer er 1 verandert dan ook de ander.
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

*/

// functions!

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
    console.log('dit is variable a ' + a);
    console.log('city van het object ' + b.city)
};

// de primitive wordt als copy in de functie gezet, het object als referentie
// it will never effect de variabel on the outside (age)
// vandaar dat age 27 blijft en de city van het object verandert.

change(age, obj);
console.log('dit is variable a ' + age);
console.log('city van het object ' + obj.city)

//console.log('dit is de age variabele ' + age);
//console.log(obj.city);

// passing functions as arguments

var years = [2001, 1965, 1988, 2003, 1956];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
        //arrRes.push(calculateAge(2005)) dit staat hierboven
        // of te wel arrRes.push(11)
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

// lecture: functions returning functions
// let's create a function which create interview quesitons
// for each job we will return a string with the usersname as input.

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can you please explain what ux deisgn is');
        };
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ' what do you teach');
        };
    } else {
        return function(name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

// the teacherQuestion variable will return the function:
/* function(name) {
            console.log(name + ' can you please explain what ux deisgn is');
        } */
/*
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');
interviewQuestion('teacher')('Mark');

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// closures

function retirement(retirementAge) {
    var a = ' years for retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementNL = retirement(65);
retirementNL(1971);
*/