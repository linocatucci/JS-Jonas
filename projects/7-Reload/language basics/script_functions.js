/* var name = 'John';
var lastName = 'Smith';
var isMarried = 'yes';


console.log('hello ' + name + ' ' + lastName);


var lino = function (name) {

    console.log(name + ' Straks strade bianchi he?!');
};

lino(name);

var age = 26;

console.log(age);

var isOlderThan18 = true;
console.log(isOlderThan18);

var optellen = function (getal1, getal2) {
    var optellen1 = getal1 + getal2;
    var maal1 = getal1 * getal2;

    console.log(optellen1);
    console.log(maal1);

};
optellen(3, 4);

//lecture : variables 2

var var2 = function (naam, age) {
    console.log(naam + ' ' + age);
};
var2(name, age);

var now = 2016;
var birthyear = now - 26;

//birthyear = now - 26 * 2;
console.log(birthyear);

// += and -=

var ageJohn = 32;

ageJohn++;
console.log(ageJohn);

// if else statements

if (isMarried === 'yes') {

    console.log(name + ' ' + 'is married!');
} else {
    console.log(name + ' ' + 'is not married!');
}

isMarried = false;

if (isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}

// difference between == and ===, the === does not type coercion, needs to be the exact same.
// always use the === when comparing variables.
if (23 == "23") {
    console.log('something to print...');
} else {
    console.log('nothing to print');
}

// lecture : boolean logic and swith
var age = 16;

if (age < 16) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('john is a young man');
} else {
    console.log('John is a man');
}

// coding challange nr 1.

/*
-- the player with the highest value of his height (in cm) plus five times his age wins
1. create vars for the heights and ages of the thow friends and assign them some values
2. calculate their scores
3. decide who wins and print the winner to the consle, include the score in the string that you output 
to the console. there can be a draw (same score for both players)

4. extra : add a third friend/player to the game. you need to add the && operator
*/
/*

var suzanHeight = 180;
var suzanAge = 10;
var linoHeight = 181;
var linoAge = 10;
var juliaHeight = 180;
var juliaAge = 10;

var linoScore = linoHeight + (linoAge * 5);
var SuzanScore = suzanHeight + (suzanAge * 5);
var juliaScore = juliaHeight + (juliaAge * 5);

if (linoScore > SuzanScore && linoScore > juliaScore) {
    console.log('lino has won the game with a score of' + ' ' + linoScore);
} else if (SuzanScore > linoScore && SuzanScore > juliaScore) {
    console.log('Suzan has won the game with a score of' + ' ' + SuzanScore);
} else if (juliaScore > SuzanScore && juliaScore > linoScore) {
    console.log('Julia has won the game with a score of' + ' ' + juliaScore);
} else if (juliaScore === linoScore && juliaScore === SuzanScore) {
    console.log('there is a draw');
}
console.log('linoScore: ' + linoScore + ' suzanScore: ' + SuzanScore + ' juliascore ' + juliaScore);

// FUNCTIONS!!!!!

var calculateAge = function (yearOfBirth) {

    var age = 2017 - yearOfBirth;
    console.log(age);
};

calculateAge(1971);

function printName(name) {
    var welcomeMessage = ('Hello there ' + name);
    return welcomeMessage;
}

var lino = printName('lino');
console.log(lino);

function calculateAge1(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageOfLino = calculateAge1(1971);
console.log(ageOfLino);

function calculateYearlyInterest(savings) {
    var yearlyInterest = (savings / 100) * 3;
    return yearlyInterest;

}

var savingsLino = calculateYearlyInterest(30000);
console.log(savingsLino);

var savingsSuzan = calculateYearlyInterest(75000);
console.log(savingsSuzan);

function calculateDiscount(price) {
    var discount;
    if (price < 1000) {
        discount = ((price / 100) * 2);
    } else if (price > 1000 && price <= 1500) {
        discount = ((price / 100) * 3);
    } else if (price > 1501) {
        discount = ((price / 100) * 4);
    }
    return discount;
}

var discountForTV = calculateDiscount(700);
console.log('discount ' + discountForTV);

var discountForTV = calculateDiscount(1100);
console.log('discount ' + discountForTV);

var discountForTV = calculateDiscount(1800);
console.log('discount ' + discountForTV + ' discount percentage 4');

var blabla = calculateYearlyInterest(2000);
console.log(blabla + ' korting');

// calculate the age of somebody


function calculateAge3(yearOfBirth) {

    var age = 2017 - yearOfBirth;
    return age;
}

var bobby = calculateAge3(1956);
console.log(bobby + ' zo oud');



// how many years untill retirement?
// bv 65 retriment, age weten en dat van retriment aftrekken

function retirementAge(name, yearOfBirth) {

    var age = calculateAge3(yearOfBirth);
    var yearsToRetirement = 65 - age;
    if (yearsToRetirement > 0) {

        console.log(name + ' ' + yearsToRetirement);
    } else {
        console.log(name + ' ' + 'has already retired');
    }

}

retirementAge('John', 1990);
retirementAge('Mike', 1986);
retirementAge('Mary', 1948);


// lecture statements and expressions

// function statement -> performs an action
function someFunction(par) {

    //code 
}

// function expression -> produces a value
var someFunction = function (par) {

    // code 
}

// expression 
3 + 4;
var x = 3;

// statements
if (x === 5) {

    //do something
}

// lecture : Arrays

var names = ['John', 'Mary', 'Julia', 'Lino'];
console.log(names);
console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var John = ['John', 'Smith', 1990, 'designer', false];

John.push('blue');
console.log(John);
John.unshift('Mr');
console.log(John);
John.pop();
John.shift();
console.log(John);

var indexBirthYear = John.indexOf(1990);
console.log(indexBirthYear);
console.log(indexBirthYear);

// is john a teacher?
if (John.indexOf('teacher') === -1) {
    console.log('John s not a teacher')
} else {
    console.log('John is a teacher');
}

// lecture about objects: when you want to access a variable with its name.
/*

var arr = [1, 2, 3];
arr[0] =  value 1

*/
// in object we don't care about the order of the value
/*
var John = {
    name: 'John',
    lastName: 'Smith',
    job: 'teacher',
    yearOfBirth: 1990,
    isMarried: false
};

console.log(John);
console.log(John.job);
console.log(John['job']);
var xyz = 'job';
console.log(John[xyz]); //dit wordt John['job']

John.lastName = 'Miller';
John[xyz] = 'designer'; // wordt dus John.job
console.log(John);

var Jane = new Object();
Jane.name = 'Jane';
Jane.lastName = 'Smith';
Jane['yearOfBirth'] = 1990;


// objects and methods
// version 1.0 object of the JOhn object.
/*
var John = {
    name: 'John',
    lastName: 'Smith',
    job: 'teacher',
    yearOfBirth: 1990,
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        return 2016 - this.yearOfBirth;
    }
};

console.log(John);
console.log(John.lastName);
console.log(John.calculateAge());

var age = John.calculateAge();
John.age = age; // added the var to the object.
console.log(John);
*/
/*

var John = {
    name: 'John',
    lastName: 'Smith',
    job: 'teacher',
    yearOfBirth: 1990,
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        // return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
        // this verwijst naar het John object.

    }
};
John.calculateAge();
console.log(John);

// eigen object maken.

var opelAstra = {
    brand: 'Opel',
    type: 'Astra K',
    price: 25000,
    build: 2017,
    engine: 'diesel',
    pk: 140,
    leaseTerm: 5,
    calculateEndOfLease: function () {
        this.endLease = this.build + this.leaseTerm;
    },
    calculateMonthlyPrice: function () {
        this.montlyCost = (this.price / 12) * 0.15;
    }
};

opelAstra.calculateEndOfLease();
opelAstra.calculateMonthlyPrice();
console.log(opelAstra.endLease);
console.log(opelAstra.montlyCost);
console.log(opelAstra);
console.log(opelAstra.type);

// loops 
// lets start with the for loop
/*
for (var i = 0; i <= 10; i++) {

    console.log('dit is het nummer ' + i);
}
*/
// op 2 manier over een array loopen
/*

var names = ['John', 'Mary', 'Julia', 'Lino', 'Bob'];
/*
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/
/*
// function which can loop over an array
loopOverArray = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log('for loop start bij 0: ' + arr[i]);
    }
};

loopOverArray(names);


// loop over but counting down:
console.log(names.length);
loopOverArray = function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log('for loop start achteraan: ' + arr[i]);
    }
};
loopOverArray(names);

// while loops
var i = 0
while (i < names.length) {
    console.log('while loop: ' + names[i]);
    i++
}

// break stopt de loop bij 3
for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}
// continue skips 3
for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
/*
// coding challange 2: 
// 1. create an array with some years where persons were born
// 2. create an empty arry (just []))
3. use a loop to file the array with the age of the person
4. use another loop to log into the console wether each person is of full age  (18 of ouder)
5. create a function called printFullAge which receives the vector / array /value of years as
// an argument , executes steps 2, 3 and 4 and returns a vector of true/false boolean values
// true if a person is >= 18 and false if the person is <= 18
6. call the funciton with two different vectors / arrays and store the result in two variabels
// full_1 anf full_2

example input : [1976, 2008, 1992];
example output: [true, false, true]
read from array can be done y[i]
write to array can be done: y[i]=....

*/
var years = [1976, 2008, 1992, 2005, 1971];
var years2 = [1956, 1955, 1963, 1965, 1999, 1985, 2001, 2009, 2001];
var resultAge = [];
var result = [];

function calculateAge(array) {
    for (var i = 0; i < array.length; i++) {
        var age = 2016 - array[i];
        resultAge[i] = age;
    }
}

function printFullAge(array) {
    calculateAge(array);
    for (var i = 0; i < resultAge.length; i++) {
        if (resultAge[i] > 18) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    console.log(array);
    console.log(resultAge);
    console.log(result);
}

printFullAge(years);
printFullAge(years2);

// coding challange 3.
/*
1. Julia, Suzan en Lino hebben gespaard. Maak een array met het spaarbedrag.
    loop over deze array heen en
2. maak een function die het rente bedrag berekent (De rente is 3%) van de spaarrekening van Julia, Suzan en Lino. 
3. maak een lege array die het rente bedrag in,deze lege array zet
4. loop nog een keer over de array met rente bedragen heen en besluit of je van dit bedrag kunt 
*/

var spaarBedragen = [8000, 10000, 20000];
var renteBedragen = [];


function berekenRenteBedrag(array) {

    for (var i = 0; i < array.length; i++) {
        var renteBedrag = array[i] / 100 * 3;
        renteBedragen[i] = renteBedrag;
    }
}

function printRenteBedragen(array) {
    berekenRenteBedrag(array);
    console.log(renteBedragen);

    for (var i = 0; i < renteBedragen.length; i++) {
        if (renteBedragen[i] < 200) {
            console.log('uw rentebedrag ' + renteBedragen[i] + ' is niet genoeg om op vakantie te gaan');
        } else if (renteBedragen[i] > 201 && renteBedragen[i] <= 300) {
            console.log('uw rentebedrag ' + renteBedragen[i] + ' is bijna genoeg om op vakantie te gaan');
        } else if (renteBedragen[i] > 301) {
            console.log('uw rentebedrag ' + renteBedragen[i] + ' is genoeg om op vakantie te gaan!');
        }
    }
}
printRenteBedragen(spaarBedragen);