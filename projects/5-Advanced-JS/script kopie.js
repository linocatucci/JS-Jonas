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
// function construction is used more, so this type we
// will use in the course.

/*

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

*/

// lecture: functions: passing functions as arguments and use of callback functions

var years = [1990, 2005, 1971, 2006, 1975, 1965];

// generic function which loops over an arry and an input of a function
function arrayCalc(arr, fn) {
    var arrResult = [];

    for (var i = 0; i < arr.length; i++) {
        // 1990 wordt in de functie calculateAge gedaan
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

// callback functions (el input zal de array years zijn)
function calculateAge(el) {
    return 2016 - el;
}

function iSfullAge(el) {
    return el >= 18;
}

// el is the age
function maxHearthRate(el) {

    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));

    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, iSfullAge);
var rates = arrayCalc(ages, maxHearthRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

// lecture: functions returning functions
// for each job it's returning a function which returns a name and a string

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' can you please explain what UX design is? ');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('what subject do you teach? ' + name);
        }
    } else {
        return function (name) {
            console.log('hello what do you do? ');
        }
    }
};
// returning a function from a function in var teacherQuestion.
var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

// kan ook zo aangeroepen worden
interviewQuestion('teacher')('John')

var designerQuestion = interviewQuestion('designer');

designerQuestion('Julia');
designerQuestion('Mike');
designerQuestion('Jane');
designerQuestion('Floor');


// welke school? wit, zwart of gemengd?

function welkeSchool(kleur) {
    if (kleur === 'wit') {
        return function (naam) {
            console.log(naam + ' Jij kunt beter naar Saenredam school gaan');
        }
    } else if (kleur === 'gemengd') {
        return function (naam) {
            console.log(naam + ' Jij kunt beter naar Compaan gaan');
        }
    } else {
        return function (naam) {
            console.log(naam + ' Jij past beter bij Poelenburg');
        }
    }
};

var witteVraag = welkeSchool('wit');
witteVraag('Julia');
// eigenlijk worden het 2 input parameters voor de functie:
// welkeSchool ('wit')('Julia');

var gemengdeVraag = welkeSchool('gemengd');
gemengdeVraag('Floor');

var zwarteVraag = welkeSchool();
zwarteVraag('Brian');


// immediately invoked function expressions (IIFE)


function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
    console.log(score);

}
game();

// kan ook zo geschreven worden. Als een functie alleen maar een lokale variabele moet hiding for the outside, kun je beter IIFE gebruiken.
// trick the javascript parser door in () te "wrappen"
// dan denkt javascript dat het een expression is en niet een declaration of the function.
// data privacy here!

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
    console.log(score);
})(5);



function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

// maak een var met functie van het eerste deel
// daarna die variabele aanroepen met de input parametern van de 2e functie (yearOfBirth)
var retirementUS = retirement(66);
retirementUS(1990);
// kan ook zo aangeroepen worden
retirement(66)(1990);

var retirementNL = retirement(65);
var retirementIceland = retirement(67);

retirementNL(1971);
retirementIceland(1972);

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' can you please explain what UX design is? ');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('what subject do you teach? ' + name);
        }
    } else {
        return function (name) {
            console.log('hello what do you do? ');
        }
    }
};
*/

function interviewQuestion(job) {
    return function (name) {
        if (job === 'teacher') {
            console.log(name + ' You should be teacher');
        } else if (job === 'designer') {

            console.log(name + ' You should be designer');
        } else {
            //code
        }
    };
}
interviewQuestion('teacher')('John');