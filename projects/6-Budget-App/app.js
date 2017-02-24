// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object
var budgetController = (function() {

    // object for the expense
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // object for the income
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // object to store the total incomes and expenses
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
        addItem: function(type, des, val) {
            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            // below an id of 6 you will have 2 id's of 6 and that is not possible.
            // ID = last ID + 1
            //[1 2 4 6 8], next ID = 9
            // the last id is 4, because position 0,1,2 3,4 = nr 8
            // the length is 5 and array is zero based, 5 - 1 = 4
            // ID = last ID + 1

            // create new ID
            // when array is empty it will be 0 length - 1 = -1 and there is no id with -1.
            // so if the array is empty make the id 0
            if (data.allItems[type].length > 0) {
                // type = inc or exp
                // data.allItems[type] = data.allItems.exp
                // first select the last element of type [exp]
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create new id based on 'inc' or 'exp' type 
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            // the type is 'exp' or 'inc', comes from the input argument from the function
            // push new item into our data structure
            // data.allItems.exp.push(newItem);
            data.allItems[type].push(newItem);
            // return the newItem so the other calling module of function can have direct access to the new item we just created.
            // it's returned to the calling method.
            return newItem;
        },
        // our data structure is private so to show it in the console we can create a 
        // test function which is console.log the data object
        testing: function() {
            console.log(data);
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    // public method to use in other modules
    // return an empty object with methods so the method will accessable from the outside
    // and that will be assigned to the UIController
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
        addListItem: function(obj, type) {
            var html, newHtml, element;

            // 3. add the new item to the UIController
            // create html string with placeholder tekst
            // placeholder tekst with %bla%, % zijn makkelijker te vinden

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace the placeholder tekst with real data
            newHtml = html.replace('%id%', obj.id);
            // don't use the html, because the 1st replacement is in the new newHtml variable, 
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
        // the function after the click is an anonymous function, now it's the ctrlAddItem function which will be
        // executed after the click button. It's not good practice to add all the logic right after the anonymous function
        document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem);

        // key press event listner, on the global document that's why not a css class is selected.
        // the function after the click is an anonymous funciton, we will now pass an argument into the function
        // the argument will be called event
        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    ctrlAddItem = function() {
        var input, newItem;

        // 1. get the Object fields input data back from the UIController.
        input = UICtrl.getInput();
        console.log('hieronder staan de GUI input waarde');
        console.log(input);

        // 2. add the item (expense or income) to the budgetController
        // addItem method returns an object so we need to save it in a variable.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. add the new item to the UIController
        UICtrl.addListItem(newItem, input.type);

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