// IIFE, anonymous function wrapped in ()
var budgetController = (function () {

    var x = 23;

    var add = function (a) {
        return x + a;
    }

    return {
        // method publicTest is public exposed from the budgetController
        // closure was created here.
        publicTest: function (b) {
            // return it for the z var to console.log it
            return (add(b));
        }
    }

})();


// another module, UI budgetController
// standalone module, not interacting with budgetController module
var UIController = (function () {

    // some code

})();


var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);

        }
    }

})(budgetController, UIController);