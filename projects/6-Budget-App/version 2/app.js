// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// the module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object


// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

    };
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, id;

            // create new id, 
            if (data.allItems[type].length === 0) {
                id = 0;

            } else {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }

            // create new item based on inc or exp
            if (type === 'inc') {
                newItem = new Income(id, desc, val);
            } else if (type === 'exp') {
                newItem = new Expense(id, desc, val);
            }

            //push it in the datastructure
            data.allItems[type].push(newItem);
            return newItem; // other module need to use the newItem that's why we need to return it.
        },
        testing: function () {
            console.log(data);
        }
    };

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

    var setUpEventListners = function () {
        // ####### All Event Listners go here:
        document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {

                ctrlAddItem();
            }
        });
    };


    // DRY principle
    var ctrlAddItem = function () {
        var input, newItem;

        //1. Get the field input data and read them from HTML input types, the UIController will read the data
        input = UICtrl.getInputData();
        console.log(input);

        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the new item to the UI

        //4. calculate the buget

        //5. display the budget

    };
    // again return an object with an function otherwise the init function cannot be called from the outside controller scope
    return {
        init: function () {
            console.log('Application has started!');
            setUpEventListners();
        }
    };

})(budgetController, UIController);
controller.init();