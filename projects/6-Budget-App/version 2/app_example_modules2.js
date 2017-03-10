// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// the module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object

var budgetController = (function () {

    var x = 23;

    function add(a) {
        return x + a;
    }
    return {
        publicTest: function (b) {
            return add(b);
            //console.log(add(b));
            //console.log('het werkt');
        }
    };

})();

var UIController = (function () {

    // some code later

})();


var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(40);


    return {
        anotherPublic: function () {
            console.log(z);
            // controller.anotherPublic(); in de browser console aanroepen
        }
    }

})(budgetController, UIController);