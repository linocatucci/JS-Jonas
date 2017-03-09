// Functions returning functions!!!

// 1. deze function retourneert een functie die een getal kan tonen

// 2. deze function retourneert een functie die een hallo text met naam kan tonen

// 3. deze function retourneert een functie die een job en vraag kan tonen

//alert('boe!')

// foreach function test


// #############
// 1. deze function retourneert een functie die een getal kan tonen

function toonGetal() {
    return function (getal, naam) {
        console.log(getal + ' voor ' + naam);
    }
}
/* deze functie retourneert direct een functie, de returned functie heeft 2 input parameters (naam en getal)*/
var getalVoorLino = toonGetal();
getalVoorLino(15, 'lino');

// ###########
// 2. deze function retourneert een functie die een hallo text kan tonen

function toonHalloTekst() {
    return function (naam, halloTekst) {
        console.log(naam + ' ' + halloTekst);
    }
}

var halloTekstlino = toonHalloTekst();
halloTekstlino('lino', 'Hoe gaat het ermee?');

// 3. deze function retourneert een functie die een job en vraag kan tonen

function whichJobQuestion(job) {
    return function (name) {
        if (job === 'teacher') {
            console.log(name + ' what subject do you teach?');
        } else if (job === 'designer') {
            console.log(name + ' can you explain what UX design is?');
        } else {
            console.log('what kind of work do you do? ' + name);
        }
    }
}

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

var teacherJob = whichJobQuestion('teacher');
teacherJob('Lino');

var designJob = whichJobQuestion('designer');
designJob('Mark');

var elseJob = whichJobQuestion();
elseJob('sjaak');

// foreach function: 
// https://www.w3schools.com/jsref/jsref_forEach.asp
/* Argument	Description
currentValue	Required. The value of the current element
index	        Optional. The array index of the current element
arr	            Optional. The array object the current element belongs to

*/
// function(currentValue, index, arr)
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (curr, index) {
    console.log(index + 1 + ". " + curr); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});