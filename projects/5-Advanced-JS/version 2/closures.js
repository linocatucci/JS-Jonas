// closures 
// this example is returning a function
// retriment age, yearofbirth, string a - piece of text
function retirement(retirementAge) {
    var a = ' years until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

var retrimentNL = retirement(65);
retrimentNL(1990);

var retrimentDE = retirement(66);
retrimentDE(1966);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'teacher') {
            console.log(name + ' what do you teach?');
        } else if (job === 'programmer') {
            console.log(name + ' what are you programming?');
        } else if (job === 'designer') {
            console.log(name + ' can you explain what UX is?')
        } else {
            console.log(name + ' can you tell me what you do for a living?');
        }
    }
}

var designerQ = interviewQuestion('designer');
designerQ('Mark');
var programmerQ = interviewQuestion('programmer');
programmerQ('Lino');
var teacherQ = interviewQuestion('teacher');
teacherQ('Lucas')
var niksQ = interviewQuestion();
niksQ('Dylan');