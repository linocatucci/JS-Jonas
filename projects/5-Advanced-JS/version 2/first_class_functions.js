// first class functions : passing functions as arguments also called callback functions

var years = [2001, 2000, 1971, 1953, 1967, 1999, 1990];

function arrayCalc(arr, fn) {
    var arrayResult = [];

    for (var i = 0; i < arr.length; i++) {

        arrayResult.push(fn(arr[i]));
    }
    return arrayResult;
}

function calculateAge(el) {

    return 2017 - el;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

// first class functions : functions returning functions

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