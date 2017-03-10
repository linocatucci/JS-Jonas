// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// the module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object
var budgetController = (function () {


    var x = 23;

    var add = function (a) {
        return x + a;
    };
    // returning an object with an method which we want to be public (publicTest)!
    return {
        // method key:value pair
        publicTest: function (b) {
            return (add(b));
        }
    };

})();

var UIController = (function () {

    // some code

})();

var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);
    console.log(z);

    return {
        anotherPublic: function () {
            console.log(z);
            // controller.anotherPublic(); in de browser console aanroepen
        }
    };

})(budgetController, UIController);