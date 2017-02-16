console.log('dit werkt vanuit VScode');

var years = [1990, 1956, 1937, 1975, 1989, 2005];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        // kan ook zo geschreven worden:
        // arrResult.push(functie die wat met de data doet [voor elke array element])
        // function calculateAge(1990 of 1956 of 1937 etc) {
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


// simple function withour an IIFE

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
(function() {
    var randomNR = Math.random() * 10;
    if (randomNR > 5) {
        console.log(randomNR);
        console.log(true);
    } else {
        console.log(randomNR);
        console.log(false);
    }
})();

(function(goodluck) {
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

/*
function retirement(retiremenAge) {
    return function(yearOfBirth) {
        var a = 'years left until retirement ';
        var age = 2016 - yearOfBirth;
        console.log((retiremenAge - age) + a);
    }
}
*/

function retirement(retiremenAge) {
    return function(yearOfBirth) {
        var tekst = ' jaren te gaan tot pensioen ';
        var age = 2016 - yearOfBirth;
        console.log((retiremenAge - age) + tekst);
    }
}
var retirementNL = retirement(65);
retirementNL(1971);
//of
retirement(65)(1971);
var teacherquestion = interviewQuestion('teachere');
teacherquesiton('Julia');