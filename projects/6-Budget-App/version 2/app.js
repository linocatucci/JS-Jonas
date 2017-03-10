// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// the module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object


// BUDGET CONTROLLER
var budgetController = (function () {

    //some code

})();

//UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // object we return will be assigned to the UIController
    return {
        getInputData: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp (html element)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    };

})();

//CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var DOMStrings = UICtrl.getDOMStrings();


    // DRY principle
    var ctrlAddItem = function () {

        //1. Get the field input data and read them from HTML input types, the UIController will read the data
        var input = UICtrl.getInputData();
        console.log(input);


        //2. add the item to the budget controller

        //3. add the new item to the UI

        //4. calculate the buget

        //5. display the budget

    }

    // Add 
    // ####### All Event Listners go here:
    document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();
        }
    });


})(budgetController, UIController);