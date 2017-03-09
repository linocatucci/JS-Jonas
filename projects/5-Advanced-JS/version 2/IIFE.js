// IIFE, immediately invoked function expressions
// expressions return a value
// statement return an action

function game() {

    var getal = Math.round(Math.random() * 10);
    console.log(getal);
    console.log(getal > 3);

}

game();

// nu met een IIFE

(function () {
    var getal = Math.round(Math.random() * 10);
    console.log(getal);
    console.log(getal > 5);
}());

(function (goodluck) {
    var getal = Math.round(Math.random() * 10);
    console.log(getal);
    console.log(getal > 5 - goodluck);
}(5));