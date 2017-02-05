///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1956);

//function declarations
function calculateAge(year) {
    console.log(2016 - year);
}




// dit gaat niet werken omdat de variablele nog niet is geladen. Bij funcation expressions. 
// Hoisting werkt alleen bij function declarations
// function expression:

// retirement(1990); 
var retirement = function (year) {
    console.log(65 - (2016 - year));
}

// dit gaat welk werken
retirement(1990);


//variables
console.log(age);
var age = 23;
//console.log(age);

function foo() {
    console.log(age);
    var age = 56;
    console.log(age);
}

foo();

console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d);
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1980);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/
var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();
*/
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
//mike object is calling the method, thus the this keyword is assigned to mike.
mike.calculateAge();