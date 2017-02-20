// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object
var budgetController = (function() {

    // objects for the expenses and incomes
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // object to store the total incomes and expenses

    var data = {
        allItems {
            exp: [],
            inc: []
        },
        totals {
            exp: 0,
            inc: 0
        }
    };

})();

// UICONTROLLER
var UIController = (function() {

    // create an object which stores all the DOM/UI strings 
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // public method to use in other modules
    // return an object with methods and that will be assigned to the UIController
    return {
        // method getInput to return an object to return all of the 3 inputs from the UI,
        getInput: function() {
            // returning an object because we need to return 3 values (type, desc, value)
            return {
                // here will we read the data from the UI
                // first the type (+ of -)
                // key:value pair
                type: document.querySelector(DOMStrings.inputType).value, // will be (inc(+) or exp(-)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        // to use the DOMStrings in the app controller we need to return them
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    // initialize function
    var setUpEventListners = function() {

        // to use the DOMStrings from the UI controller
        var DOMStrings = UICtrl.getDOMStrings();

        // when the button is clicked
        // the function after the click is an anonymous funciton, now it's the ctrlAddItem function which will be
        // executed after the click button. It's not good practice to add all the logic right after the anonymous function
        document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem);

        // key press event listner, on the global document that's why not a class is selected.
        // the function after the click is an anonymous funciton, we will now pass an argument into the function
        // the argument will be called event
        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    ctrlAddItem = function() {

        // 1. get the Object fields input data back from the UIController.
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add the item (expense or income) to the budgetController

        // 3. add the new item to the UIController

        // 4. calculate the budget

        // 5. display the new budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started!');
            setUpEventListners();
        }
    }
})(budgetController, UIController);

controller.init();