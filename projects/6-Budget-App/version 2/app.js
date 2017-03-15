/*
        //1a create event listners, one for button and one for enter key
        
        //1. Get the field input data and read them from HTML input types, the UIController will read the data

        //2. add the item to the budget controller


        //3. add the new item to the UI
            // create new id,    
            // create new item based on inc or exp, 
            //push it in the datastructure
            // other module need to use the newItem that's why we need to return it.

        //4. clear the fields

        // convert the value string to a integer/number parseFloat
        
        // only add an item if the desc and value is not null
                
        //4.1 calculate the buget
        
        // return the budget

        //5. display the budget on the UI
*/

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
        },
        budget: 0,
        percentage: -1
    };
    
    var calculateTotal = function(type){
        
        var sum = 0;
        
        data.allItems[type].forEach(function(current){
            // sum = sum + current.value
            sum += current.value;
            data.totals[type] = sum;
            
        }); 
    }

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
        },
        calculateBudget: function(){
            
            // calculate the total income and expense
            calculateTotal('exp');
            calculateTotal('inc');
            
            
            // calculcate the budget  = income - expense
            data.budget = data.totals.inc - data.totals.exp;
            
            // calculate the percentage of income that we spent.
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            
            // expense = 100 and income = 200, spent 50% = 100/200 = 0.5 * 100
        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.allItems.inc,
                totalExp: data.allItems.exp,
                percentage: data.percentage
            }
        }
    };

})();


//UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    // object we return will be assigned to the UIController
    return {
        getInputData: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp (html element)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },

        addListItem: function (obj, type) {
            var html, newHtml, element;

            // create HTML string with placeholder text

            if (type === 'inc') {

                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp') {

                element = DOMStrings.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21 %</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }


            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the html into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        getDOMStrings: function () {
            return DOMStrings;
        },
        clearFields: function(){
            var fields, fieldsArray;
            
            // with querySelectorAll the variable is not a normal array.
            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
            // slice returns an array, a clean nice array
            
            // we need to make it a normal array
            fieldsArray = Array.prototype.slice.call(fields);

            // foreach
            fieldsArray.forEach(function(current, index, array){
                                
                current.value="";
            });
            //in the array the first element is the inputDesecription
            fieldsArray[0].focus();
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

    
    var updateBudget = function(){
        
        // convert the value string to a integer/number parseFloat
        
        // only add an item if the desc and value is not null
                
        //4.1 calculate the buget
        budgetCtrl.calculateBudget();
        
        // return the budget
        
        var budget = budgetCtrl.getBudget();
        

        //5. display the budget on the UI
        
    }

    // DRY principle
    var ctrlAddItem = function () {
        var input, newItem;

        //1. Get the field input data and read them from HTML input types, the UIController will read the data
        input = UICtrl.getInputData();
        console.log(input);
        
        if (input.description !=="" && !isNaN(input.value) && input.value > 0){
        
        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the new item to the UI
        UICtrl.addListItem(newItem, input.type);

        //4. clear the fields
        UICtrl.clearFields();
        
        // 5. calculate and update the budget
        updateBudget();
        
        }
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