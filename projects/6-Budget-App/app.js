// module pattern is all about IIFE's and CLOSURES

var budgetController = (function() {

    //some code
    var x = 23;
    var add = function(a) {
        return x + a;

    }
    return {
        publicTest: function(b) {
            console.log(add(b));
        }

    }
})();