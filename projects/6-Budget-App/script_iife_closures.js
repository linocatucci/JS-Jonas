console.log('dit werkt vanuit VScode');

// blueprint, function constructor works like a blueprint
// creating objects; the function constructor!

// old way
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

// we can use a blue print to create an object, via the function constructor!
// it's a pattern to write an object!
// needs to start with a capital!

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// inheritance 
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}


var john = new Person('john', 1990, 'teacher');
console.log(john);
console.log(john.job);

var jane = new Person('jane', 1986, 'desinger');
jane.calculateAge();
var mark = new Person('mark', 1971, 'programmer');
mark.calculateAge();
john.calculateAge();

// eigen object
var Car = function (brand, type, engine, horsePower, color, yearOfMake, leaseContract) {
    this.brand = brand;
    this.type = type;
    this.engine = engine;
    this.horsePower = horsePower;
    this.color = color;
    this.yearOfMake = yearOfMake;
    this.leaseContract = leaseContract;

};
// eigen object method
Car.prototype.calculateEndLeaseContract = function () {
    this.yearOfEndContract = this.yearOfMake + this.leaseContract;
    console.log(this.yearOfEndContract);

}

var opelAstra = new Car('Opel', 'AstraK', 'CDTI', 140, 'blue', 2014, 5);
var fiat500 = new Car('Fiat', '500', 'Benzine', 80, 'black', 2016, 5);
console.log(opelAstra);
console.log(fiat500);
fiat500.calculateEndLeaseContract();
opelAstra.calculateEndLeaseContract();


// PASSING FUNCTIONS AS ARGUMENTS
var years = [1990, 1995, 1999, 1989, 2005];

function arrayCalc(arr, fn) {
    var arrayResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrayResult.push(fn(arr[i]));
    }
    return arrayResult;
}
// dus de (el) van element wordt de array element, het is dan eigenlijk aan: (calculateAge(arr[i])
// el = arr[i]
// el = 1990
// calculateAge(1990)


function calculateAge(el) {
    return 2016 - el;
};
// calculateAge als een input argument
var ages = arrayCalc(years, calculateAge);
console.log(arrayCalc(years, calculateAge));

function isFullAge(el) {
    if (el > 18) {
        return true;
    } else {
        return false;
    }
};

function yearsUntil40(el) {
    return 40 - el;
}
var olderThan18 = arrayCalc(ages, isFullAge);
console.log(arrayCalc(ages, isFullAge));
console.log(olderThan18);

var yearsTot40 = arrayCalc(ages, yearsUntil40);
console.log(arrayCalc(ages, yearsUntil40));


// FUNCTIONS RETURNING FUCTIONS
//

// a function returning 

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' ,what is UX design?');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log('what subject do you teach ' + name);
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('mark');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

// 1. deze function retourneert een functie die een getal kan tonen

function geefGetalToonFunctie(getal) {
    return function (getal) {
        console.log(getal + ' is ingetoetst');
    }
};

var geefMijEenGetal = geefGetalToonFunctie();
geefMijEenGetal(6);

/*
Wat ik in zo’n geval altijd doe is “uitkleden” tot de basis, zie bijlage.

*/

// 1. deze function retourneert een functie die een getal kan tonen
function geefGetalToonFunctie() {
    return function (getal) {
        console.log(getal);
    }
}
// 2. deze variable bevat nu de functie die een getal kan tonen
var getalToonFunctie = geefGetalToonFunctie()

// 3. de functie die een getal kan tonen wordt nu aangeroepen (met een getal)
getalToonFunctie(5)

//1. deze functie geeft een welomst boodschap terug, obv het moment van de dag met de naam (input)

function geefEenHalloTekstTerug(momentVanDeDag) {
    return function (naam) {
        console.log('Goede' + momentVanDeDag + ' ' + naam);
    }
};

var ochtendGroet = geefEenHalloTekstTerug('ochtend');
ochtendGroet('Lino');

// IIFE , immediately invoked function expressions
// old style nog an iife
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5) - goodluck;
})(5);

// closures
// a function returns a funciton how many years we have left until retirement
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
};

var retirementNL = retirement(65);
retirementNL(1971); // = eigenlijk dit: return function(yearOfBirth) {
// kan ook zo
retirement(65)(1971);

var retirementDE = retirement(66);
retirementDE(1981); // = eigenlijk dit: return function(yearOfBirth) {

// rewrite interviewQuestion as a closer
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' ,what is UX design?');
        };
    } else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach ' + name);
        };
    }
}
*/
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' ,what is UX design?');
        } else if (job === 'teacher') {
            console.log('closure functie: what subject do you teach ' + name);
        }
    }
};

var teacherQuestion2 = interviewQuestion('teacher');
teacherQuestion2('Lino');

// test

var xx = 23;

var add = function (a) {
    return xx + a;
}

console.log(add(5));

























var years = [1990, 1956, 1937, 1975, 1989, 2005];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        // kan ook zo geschreven worden:
        // arrResult.push(functie die wat met de data doet [voor elke array element])
        // function calculateAge([1990 of 1956 of 1937 etc]) {
        arrResult.push(fn(arr[i]));

    }
    return arrResult;
    console.log()

}

function calculateAge(el) {
    return 2016 - el;
}

function isOlderThan18(el) {
    return el > 18;
}

function maxHearthRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}
// calculateAge is een call back function
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isOlderThan18);
var rates = arrayCalc(ages, maxHearthRate);
console.log(ages);
console.log(fullAges);
console.log(rates);


// simple function without an IIFE

function game() {
    var randomNR = Math.random() * 10;
    if (randomNR > 5) {
        console.log(randomNR);
        console.log(true);
    } else {
        console.log(randomNR);
        console.log(false);
    }
}
game();

// IIFE
(function () {
    var randomNR = Math.random() * 10;
    if (randomNR > 5) {
        console.log(randomNR);
        console.log(true);
    } else {
        console.log(randomNR);
        console.log(false);
    }
})();

(function (goodluck) {
    var randomNR = Math.random() * 10;
    if (randomNR > 5 - goodluck) {
        console.log(randomNR);
        console.log(true);
    } else {
        console.log(randomNR);
        console.log(false);
    }
})(5);

// Lecture: closures



// we stored the returned function in de variabele retirementNL 
// dus zowel de var retiremenAge van 65 zit in de retirementNL als ook de gehele anonymous function


function retirement(retiremenAge) {
    return function (yearOfBirth) {
        var a = 'years left until retirement ';
        var age = 2016 - yearOfBirth;
        console.log((retiremenAge - age) + a);
    }
}

function retirement(retiremenAge) {
    return function (yearOfBirth) {
        var tekst = ' jaren te gaan tot pensioen ';
        var age = 2016 - yearOfBirth;
        console.log((retiremenAge - age) + tekst);
    }
}
var retirementNL = retirement(65);
retirementNL(1971);
//of
retirement(65)(1971);