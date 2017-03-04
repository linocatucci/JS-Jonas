var name = 'John';
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