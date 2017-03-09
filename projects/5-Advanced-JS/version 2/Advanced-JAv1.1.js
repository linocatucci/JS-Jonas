// Advanced JavaScript:
// object old style
// Function constructor

var Person = function (name, lastName, sex, yearOfBirth, income) {
    this.name = name;
    this.lastName = lastName;
    this.sex = sex;
    this.yearOfBirth = yearOfBirth;
    this.income = income;
}


var lino = new Person('lino', 'catucci', 'm', 1980, 16800);
console.log(lino);

Person.prototype.calculateAge = function () {
    this.age = 2017 - this.yearOfBirth;
}
Person.prototype.calculateTaxes = function () {
    this.modaal = false
    this.taxes = ((this.income / 100) * 22);
    console.log(this.taxes);
    if (this.taxes >= 300) {
        return this.modaal = true;
    } else {
        return false;
    }
};
Person.prototype.calculateTEST = function (fn) {
    calculateTaxAmount(this.taxes);
}

lino.calculateAge();
lino.calculateTaxes();

var suzan = new Person('Suzan', 'Catucci', 'v', 1985, 17500);
console.log(suzan);

suzan.calculateAge();
suzan.calculateTaxes();

// callback function, je passed een functie in een andere functie dmv input argument.

calculateTaxAmount = function (el) {
    var TaxAmount = el * 1;
    console.log(TaxAmount);
};
lino.calculateTEST(calculateTaxAmount);

// function returning another function

function geefGetalTerug() {
    return function (getal) {
        console.log('dit is een getal ' + getal);
    }
}

var linoGetal = geefGetalTerug();
linoGetal(400000);

function interviewQuestion(job) {

    if (job === 'teacher') {
        return function (name) {
            console.log(name + ' what do you teach?');
        }
    } else if (job === 'designer') {
        return function (name) {
            console.log(name + ' can you explain what UX is?')
        }
    }
}
var designerQ = interviewQuestion('designer');
designerQ('lino');

//var getalLino = getalVanPersoon(lino);

///var geefGetalTerug(200);

// 1. deze function retourneert een functie die een getal kan tonen
function geefGetalToonFunctie() {
    return function (getal) {
        console.log(getal);
    }
}
// 2. deze variable bevat nu de functie die een getal kan tonen
var getalToonFunctie = geefGetalToonFunctie();

// 3. de functie die een getal kan tonen wordt nu aangeroepen (met een getal)
getalToonFunctie(5);


//1. deze functie geeft een hello tekst terug met de naam (input)
function geefEenHalloTekstFunctie() {
    return function (naam) {
        console.log('Hallo ' + naam);
    }
};

var LinoHallo = geefEenHalloTekstFunctie();
LinoHallo('lino');