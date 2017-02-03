/* var johnHeight = 150;
var johnAge = 45;
var carlHeight = 178;
var carlAge = 45;

var totalJohn = johnHeight + 5 * johnAge;
var totalCarl = carlHeight + 5 * carlAge;

if (totalJohn > totalCarl){
    console.log('John won the contest' + ' ' + 'with a score of: ' + totalJohn + ' and Carl had a score of ' + totalCarl);
} else if (totalCarl === totalJohn) {
    console.log('Johan and Carl have both the same value:' + 'Johns total: ' + totalJohn + 'The total of Carl: ' + totalCarl);
} else {
        console.log('Carl won the contest' + ' ' + 'with a score of: ' + totalCarl + ' and Carl had a score of ' + totalJohn);
}

var marcHeight = 175;
var marcAge = 65;
var totalMarc = marcHeight + 5 * marcAge;
console.log('total of John: ' + totalJohn);
console.log('total of Carl: ' + totalCarl);
console.log('total of marc: ' + totalMarc);

if (totalJohn > totalCarl && totalJohn > totalMarc){
    console.log('John is the overall winner!');
} else if (totalCarl >totalJohn && totalCarl > totalMarc){
    console.log('CArl won the contest' + ' ' + 'with a score of: ' + totalCarl);
} else if (totalCarl === totalJohn) {
    console.log('John and Carl have both the same value:' + 'Johns total: ' + totalJohn + 'The total of Carl: ' + totalCarl);
} else {
        console.log('it\'s a draw' );
}
*/

function calculateAge(dateOfBirth) {
    var age = 2016 - dateOfBirth;
    return age;

}
/*
var ageJohn = calculateAge(1971);
var ageMary = calculateAge(1956);
var agePeter = calculateAge(1968);

console.log(ageJohn);
console.log(ageMary);
console.log(agePeter);

//uitrekenen wanneer iemand met pensioen mag.
//naam van de persoon en de leeftijd van de persoon
// uitrekenen hoeveel jaar de persoon nog moet werken
function ageUntilRetirement(name, year) {
    var age = calculateAge(year);
    var yearsToRetirement = 65 - age;
    console.log(name + ' retires in year ' + yearsToRetirement);
}

ageUntilRetirement('lino', 1971);
ageUntilRetirement('Suzan', 1972);
ageUntilRetirement('Ton', 1965);

/* var johnHeight = 150;
var johnAge = 45;
var carlHeight = 178;
var carlAge = 45;
var totalJohn = johnHeight + 5 * johnAge;
var totalCarl = carlHeight + 5 * carlAge;
if (totalJohn > totalCarl){
    console.log('John won the contest' + ' ' + 'with a score of: ' + totalJohn + ' and Carl had a score of ' + totalCarl);
} else if (totalCarl === totalJohn) {
    console.log('Johan and Carl have both the same value:' + 'Johns total: ' + totalJohn + 'The total of Carl: ' + totalCarl);
} else {
        console.log('Carl won the contest' + ' ' + 'with a score of: ' + totalCarl + ' and Carl had a score of ' + totalJohn);
}
var marcHeight = 175;
var marcAge = 65;
var totalMarc = marcHeight + 5 * marcAge;
console.log('total of John: ' + totalJohn);
console.log('total of Carl: ' + totalCarl);
console.log('total of marc: ' + totalMarc);
if (totalJohn > totalCarl && totalJohn > totalMarc){
    console.log('John is the overall winner!');
} else if (totalCarl >totalJohn && totalCarl > totalMarc){
    console.log('CArl won the contest' + ' ' + 'with a score of: ' + totalCarl);
} else if (totalCarl === totalJohn) {
    console.log('John and Carl have both the same value:' + 'Johns total: ' + totalJohn + 'The total of Carl: ' + totalCarl);
} else {
        console.log('it\'s a draw' );
}
*/

//1e functie die moet de leeftijd uitrekenen op basis
//van het geboorte jaar
//2e functie moet op basis van je leeftijd uitrekeken
// hoelang je nog moet werken voor je met pensioen mag

/*
function calculateAge(dateOfBirth) {
    var age = 2016 - dateOfBirth;
    return age;
}

function ageUntilRetirement(name, year) {
    var age = calculateAge(year);
    var yearToRetirement = 65 - age;
    console.log(name + ' retires in the year ' + yearToRetirement);
}

var ageLino = calculateAge(1971);

console.log('Age of Lino ' + ageLino);

ageUntilRetirement('lino', 1971);

/*
function calculateAge(dateOfBirth) {
    var age = 2016 - dateOfBirth;
    return age;
}
var ageJohn = calculateAge(1971);
var ageMary = calculateAge(1956);
var agePeter = calculateAge(1968);
console.log(ageJohn);
console.log(ageMary);
console.log(agePeter);
//uitrekenen wanneer iemand met pensioen mag.
//naam van de persoon en de leeftijd van de persoon
// uitrekenen hoeveel jaar de persoon nog moet werken
function ageUntilRetirement(name, year) {
    var age = calculateAge(year);
    var yearsToRetirement = 65 - age;
    console.log(name + ' retires in the year ' + yearsToRetirement);
}
ageUntilRetirement('lino', 1971);
ageUntilRetirement('Suzan', 1972);
ageUntilRetirement('Ton', 1965);
*/

//BMI formule: Gewicht in kilogram / (Lengte in meter * //Lengte in meter)
/*
function calculateBMI(weight, length) {

    var BMI = weight / length;
    return BMI;
}

var BMILino = calculateBMI(70, 168);
console.log('BMI van Lino ' + BMILino);

function correctBMI(weight, length) {
    console.log('input werkt');
    var BMI = calculateBMI(weight, length);
    console.log('BMI ' + BMI);

    /* switch (BMI) {
     case (BMI <= 60):
         console.log(' Your BMI is way to low');
         break;
     case (BMI <= 80):
         console.log(' Your BMI is almost good');
         break;
     case (BMI <= 90):
         console.log(' Your BMI is good');
         break;
     case (BMI <= 110):
         console.log(' Your BMI is too high');
         break;
     case (BMI > 115):
         console.log(' Your BMI is not good, you need to loose weight');
         break;
     }
     */
/*
    if (BMI < 0.30) {
        console.log(' Your BMI is way to low');
    } else if (BMI > 0.40) {
        console.log(' Your BMI is almost good');
    } else if (BMI > 0.50) {
        console.log(' Your BMI is too high');
    }
}
*/
/*
correctBMI(74, 168);

var names = ['lino', 'john', 'suzan'];
var years = [1990, 1969, 1948];

console.log(names[1]);

names[1] = 'ben';
console.log(names[1]);
console.log(names);
//arrays 18
var names = ['lino', 'jane', 'paul'];
var years = [1971, 1972, 1973];

console.log(names);
console.log(years);

console.log(names[1]);

names[1] = 'ben';
console.log(names);

//multiple datatypes in one array
var john = ['Lino', 'Catucci', 1971, 'IT Consultant', false];
console.log(john);

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();
//alert(john.indexOf('Catucci')) returns 1

//checks the array if the word teacher is in the array! Nice!!
if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}

console.log(john);

//objects 19
//key : value pairs, the key is NAME and VALUE is 'lino' 
//first way to create objects.
var john = {
    name: 'lino',
    lastName: 'catucci',
    dateOfBirth: '1971',
    job: 'IT Consultant',
    isMarried: true
};

//2 ways to read values out of an object.
//first way
console.log(john.lastName);
console.log(john.name);
console.log(john.dateOfBirth);

//2nd way, as an string.
console.log(john['lastName']);
console.log(john['job']);

//name of the key to retrieve the value
var xyz = 'job';
console.log(john[xyz]);

var abc = 'dateOfBirth';
console.log(john[abc]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

//second way to create objects.
var jane = new Object();
jane.name = 'jane';
jane.lastName = 'Miller';
jane['yearOfBirth'] = 1971;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

jane.lastName = 'Schnitzel';
console.log(jane);

jane['yearOfBirth'] = 1970;
console.log(jane);
*/
//for the block below:
/*
function calculateAge(dateOfBirth) {
    var age = 2016 - dateOfBirth;
    return age;
}
*/

//objects and methods.
// v1.0
/*
var john = {
    name: 'lino',
    lastName: 'catucci',
    yearOfBirth: '1971',
    job: 'IT Consultant',
    isMarried: true,
    family: ['Carolien', 'Suzan', 'Floor'],
    calculateAge: function () {
        return 2016 - this.yearOfBirth;
    }

};


console.log(john);
console.log(john.family);
console.log(john.family[2]);
console.log(john.job);
console.log(john.family[0]);
//console.log(john.calculateAge(1971));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

// v2.0

/*

var john = {
    name: 'lino',
    lastName: 'catucci',
    yearOfBirth: '1971',
    job: 'IT Consultant',
    isMarried: true,
    family: ['Carolien', 'Suzan', 'Floor'],
    calculateAge: function () {
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;

    }

};

john.calculateAge();
console.log(john);



// oefening objects:
/*
- opel astra
- fly fishing lodge

*/
/*
var OpelAstra = {
    type_of_car: 'Astra K 2017',
    engine: 'diesel',
    horse_power: '140pk',
    yearOfBuild: 2017,
    hatchback: false,
    calculate_end_contract: function (yearOfBuild) {
        this.calculate_end_contract = this.yearOfBuild + 5;
    }

};

console.log(OpelAstra);
OpelAstra.engine = 'bezine';
OpelAstra.color = 'blue';
OpelAstra.calculate_end_contract();
console.log(OpelAstra);
console.log(OpelAstra.engine, OpelAstra.horse_power);


//lecture: loops
// simple for loop
/*
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var names = ['Josh', 'Mike', 'Suzan', 'Julia', 'Bob'];
console.log(names);

//print the 5 names in the console
names[0];
names[1]; //bla bla
/*
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/
/*
// 1 >= 0 when false the iteration/loop will go on!
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/
/*
// while loop
// condition is evaluated
var names = ['Josh', 'Mike', 'Suzan', 'Julia', 'Bob'];
console.log(names);
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

// break is break out of the loop
// continue is skip an iteration / value

for (i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

*/
/* coding challange 2 */


var yearsOfBorn = [1971, 1972, 1982, 1991, 1989, 2001, 2000, 2005];
var ages = [];

console.log(yearsOfBorn);

for (var i = 0; i < yearsOfBorn.length; i++) {
    //fill the empty array with ages of persons
    ages[i] = 2016 - yearsOfBorn[i];

    /*
    var age_of_persons = 2016 - yearsOfBorn[i];
    // console.log(ages);
    ages.unshift(age_of_persons);
    */

};

console.log('Ages in the Ages array: ' + ages);

for (var i = 0; i < ages.length; i++) {

    if (ages[i] >= 18) {
        console.log('You are OF full age (18 years or older)' + ' ' + ' your age is: ' + ages[i]);
    } else {
        console.log('You are NOT full age (18 years or older)' + ' ' + ' your age is: ' + ages[i]);
    }
};



var yearsOfBorn = [1971, 1972, 1982, 1991, 1989, 2001, 2000, 2005];

function printFullAge(yearsOfBorn) {

    var ages = [];
    var fullAges = [];

    console.log(yearsOfBorn);

    for (var i = 0; i < yearsOfBorn.length; i++) {
        //fill the empty array with ages of persons
        //ages[i] = 2016 - yearsOfBorn[i];


        var age_of_persons = 2016 - yearsOfBorn[i];
        // console.log(ages);
        ages.unshift(age_of_persons);

    }

    console.log('Ages in the Ages array: ' + ages);

    for (var i = 0; i < ages.length; i++) {

        if (ages[i] >= 18) {
            console.log('You are OF full age (18 years or older)' + ' ' + ' your age is: ' + ages[i]);
            fullAges.push(true);
        } else {
            console.log('You are NOT full age (18 years or older)' + ' ' + ' your age is: ' + ages[i]);
            fullAges.push(false);
        }
    }
    return fullAges;

};
var yearsOfBorn = [1971, 1972, 1982, 1991, 1989, 2001, 2000, 2005];

var full_1 = printFullAge(yearsOfBorn);
var full_2 = printFullAge([2001, 1950, 1965]);









var years = [2002, 2003, 2004];
console.log(years);
var ages = [];
console.log(ages);



for (var i = 0; i < years.length; i++) {

}