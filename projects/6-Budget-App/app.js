//BUDGET CONTROLLER, , budgetController
// IIFE, anonymous function wrapped in ()
var budgetController = (function() {
    // SOME CODE

})();

// UI CONTROLLER
// another module 
// standalone module, not interacting with budgetController module
var UIController = (function() {
    // om niet allemaal css classes en id verwijzingen te krijgen in de code ('.add__type' en '.add_blabla') maken we een object met alle UI elementen
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    };

    // In this UI controller IIFE function to expose it publicly it must be directly returned (closure). It will be assigned to UIController function.
    return {
        getinput: function() {
            return {
                //will be either inc. or exp
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
            /*
            creating the 3 variables which store the fields.
            But we need to return the 3 values. How do we do that?
            To create an object containing the 3 as properties.
            var type = document.querySelector('.add__type').value;
            var description = document.querySelector('.add__description').value;
            var value = document.querySelector('.add__value').value;
            */
        },
        // to get access from another controller to the DOMstrings, we need to expose it outside this method, same as getinput
        getDOMStrings: function() {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
// we pass the other 2 modules/controllers as arguments into the controller,
// so that this controllers knows about the other controllers and can connect them
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();
    // DRY principe om niet alles dubbel te schrijven in elke eventlistner maken wij een functie die
    // a. een item toevoegd van de TODO LIST.
    // we maken een custom function
    var ctrlAddItem = function() {

        // TO DO LIST:
        // 1. Get the field input data
        var input = UICtrl.getinput();
        var input2 = UICtrl.getDOMStrings();
        console.log(input);
        console.log(input2);

        // 2. add the time to the budget controller
        // 3. add the item to the UI
        // 4. caluculate the budget
        // 5. display the bugdet on the UI

    };

    // EventListener voor de submit knop
    // maar inplaats van een anonymous function en alle code in deze click function
    // wordt de ctrlAddItem function aangeroepen
    // we pass the ctrlAddItem function into the addEventListener method
    // the ctrlAddItem will be executed directly after the click
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    // do something

    // EventListener voor een return keyboard stroke.
    // input argument into the function is een event argument
    // does not happen on a element
    document.addEventListener('keypress', function(event) {
        // the keycode for enter is 13, alleen wanneer enter is gedrukt
        // wordt de values opgeslagen. which is voor ouderere browsers die
        // geen keycode aankunt
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        };

    });


})(budgetController, UIController);