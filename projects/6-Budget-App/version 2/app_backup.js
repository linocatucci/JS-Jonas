// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// the module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object

// ------ controller ------
//1. Get the field input data and read them from HTML input types, the UIController will read the data
/*
    - eventhandler op de knop en op de enter toets
*/

//2. add the item to the budget controller

//3. add the new item to the UI

//4. calculate the buget

//5. display the budget


var budgetController = (function () {

    //2. add the item to the budget controller
    // data structure for items



})();

var UIController = (function () {
    // private data
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        //returning an object getInputData, which have a method/function
        getInputData: function () {

            //1. Get the field input data and read them from HTML input types, the UIController will read the data
            return {
                inputType: document.querySelector(DOMStrings.inputType).value,
                inputDescription: document.querySelector(DOMStrings.inputDescription).value,
                inputValue: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    };
})();


var controller = (function (budgetCtrl, UICtrl) {

    // function called by eventhandlers:

    var DOMStrings = UICtrl.getDOMStrings();

    var ctrlAddItem = function () {

        // console.log('het werkt!');

        var input = UICtrl.getInputData();
        console.log(input);

    };

    //a. add the eventhandlers, the button and the return key
    // door ze in een functie te zetten worden ze niet meer door de IIFE gestart. 
    // ze zijn dus afgescherm van de buitenwereld.
    var setUpEventListners = function () {
        document.querySelector(DOMStrings.inputBtn).addEventListener('click', function () {

            ctrlAddItem();
        });

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {

                ctrlAddItem();
            }
        });
    };


    //a. add the eventhandlers, the button and the return key

    //1. Get the field input data and read them from HTML input types, the UIController will read the data
    /*
        - eventhandler op de knop en op de enter toets
    */

    //2. add the item to the budget controller

    //3. add the new item to the UI

    //4. calculate the buget

    //5. display the budget
    return {
        init: function () {
            console.log('Application has started!');
            setUpEventListners();
        }
    };


})(budgetController, UIController);
controller.init();