// module pattern is an IIFE and uses closures (returning a function or an object with a function)
// module pattern secret is that it will return an object containing all the functions we would like
// to be public and used by the outside

// the budgetController is an iife which will return an object
var budgetController = (function () {

    // object for the expense
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    // object for the income
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

    };

    Expense.prototype.calPercentage = function (totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    // object to store the all items(expense or income object) and the total incomes and expenses
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
        percentage: -1 // -1 betekent dat de waarde niet bestaat
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (current) {
            sum += current.value;
            /*
            voorbeeld
            0
            [200, 400, 100]
            1e iteratie : sum = 0 + 200
            2e iteratie : sum = 200 + 400
            3e iteratie : sum = 600 + 100
            */
        });
        data.totals[type] = sum;
    };
    return {
        addItem: function (type, des, val) {
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
        deleteItem: function (type, id) {
            var ids, index;

            // 1. delete items from data structure
            // element id = 3
            // data.allItems[type].slice[ID]; gaat niet werken want 
            // ids = [1 2 4 6 8]
            // YOu will delete the array element with an id of 6! And not 3!
            // element with the id of 6 will be the position of the index of 3 in the array. slice[id] will not work 
            // because the wrong id will be removed.
            // the array is not in order. the array inedex of 0, 3, 5, and 7 are missing.
            // ids = [1 2 4 6 8]
            // If you want to delete an array element with id 6, you need to delete the array element 
            // with an index = 3
            // a ID of 6 has an array index = 3 tellen vanaf (0, 1, 2, 3)

            // solution is to loop over all the elements in the array with map method with all the id's which we have. 

            // call back function has access to the current element, current index and entire array
            // map returns a new array
            ids = data.allItems[type].map(function (current) {
                // return 2, will add nr 2 in all of the elements 
                // with current.id the array will end up with this array index of [1 2 4 6 8] element 
                return current.id;
            });
            // id = 6
            // index will be 3
            // returns the index nr of he element of the array we input with id
            index = ids.indexOf(id);
            console.log(index);

            if (index !== -1) {
                data.allItems[type].splice(index, 1); // index = index of array, 1 is the number of elements you want to delete 
            }

        },
        calculateBudget: function () {
            // 1. calculate the sum of all incomes and the sum of all expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // 3. calculate the budget (income - expenses)
            data.budget = data.totals.inc - data.totals.exp;

            // 4. calculate the percentage of expenses (already spent in relation to the totale income)
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                percentage = -1;
            }
        },

        calculatePercentages: function () {

            /*
            a=20
            b=10
            c=40
            income = 100
            a = 20/100 = 20%
            b = 10/100 = 10%
            c = 40/100 = 40%
            */
            // loops over the exp array and for each current array element it will execute the calculatePercentages method
            data.allItems.exp.forEach(function (current) {
                current.calPercentage(data.totals.inc);
            });

        },

        getPercentage: function () {
            // instead of only loop over the array, we want to return the array too. This is done with map
            var allPercentages = data.allItems.exp.map(function (current) {

                return current.getPercentage();
            });
            return allPercentages;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        // our data structure is private so to show it in the console we can create a 
        // test function which is console.log the data object
        testing: function () {
            console.log(data);
        }
    };
})();

// UICONTROLLER
var UIController = (function () {

    // create an object which stores all the DOM/UI strings 
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage'

    };

    // public method to use in other modules
    // return an empty object with methods so the method will accessable from the outside
    // and that will be assigned to the UIController
    return {
        // method getInput to return an object to return all of the 3 inputs from the UI,
        getInput: function () {
            // returning an object because we need to return 3 values (type, desc, value)
            return {
                // here will we read the data from the UI
                // first the type (+ of -)
                // key:value pair
                type: document.querySelector(DOMStrings.inputType).value, // will be (inc(+) or exp(-)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // 3. add the new item to the UIController
            // create html string with placeholder tekst
            // placeholder tekst with %bla%, % zijn makkelijker te vinden

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace the placeholder tekst with real data
            newHtml = html.replace('%id%', obj.id);
            // don't use the html, because the 1st replacement is in the new newHtml variable, 
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function (selectorID) {
            //selectorID is the itemID or inc-1 or inc-0
            // getting the html id
            var elementID = document.getElementById(selectorID);
            elementID.parentNode.removeChild(elementID);

        },
        displayPercentage: function (percentages) {
            // querySelector selects only one element.
            // we will use querySelectorAll instead.
            // returns a node list
            var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);
            console.log(fields);

            var NodeListForEach = function (nodeList, callback) {
                for (var i = 0; i < nodeList.length; i++) {
                    callback(nodeList[i], i);
                }
            };
            NodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {

                    current.textContent = percentages[index] + '%';
                    console.log(current.textContent);
                } else {
                    current.textContent = '---';
                }

            });
        },
        clearFields: function () {
            var fields, fieldsArray;
            // create an array (2 values)
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            // querySelectorAll does not return an array but a list, and it misses all the array methods
            // fields.slice will not work because fields is not array the querySelectorAll did not give an array back
            // use a trick of the array slice method
            // pass a array into the slice method
            // the slice method is stored in the array prototype

            fieldsArray = Array.prototype.slice.call(fields);
            // new method to loop over an array and pass in a call back function, in this case an anonymous function
            // and the call back function( anonymous function) will expect up to 3 arguments, like as the call back function
            // to the addEventListener method. (current value, index nr 0 to lenght array -1, and entire array)
            // current value is current element: DOMStringMap.inputDescription + ', ' + DOMStrings.inputValue
            fieldsArray.forEach(function (current, index, array) {
                // in the fields array first the inputDescription then the inputValue
                current.value = "";
            });
            // after the element has been added to the UI list (income or expense), 
            // set the focus on the inputDescription field again, which is the first [0] element in the array
            fieldsArray[0].focus();
        },

        formatNumber: function (number, type) {
            var numberSplit, int, dec;
            /*
            + or - before the number
            exactly 2 decimal points
            comma separating the thousands
            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00
            */
            number = Math.abs(number);
            number = number.toFixed(2); //2310.4567 -> 2310.46 and 2000 -> 2000.00
            numberSplit = number.split('.');

            int = numberSplit[0];
            if (int.length > 3) {
                int.subs
            }

            dec = numberSplit[1];

        },


        // to use the DOMStrings in the app controller we need to return them
        getDOMStrings: function () {
            return DOMStrings;
        },
        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = '€ ' + obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;

            if (obj.totalInc > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '--';
            }

        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    // initialize function
    var setUpEventListners = function () {

        // to use the DOMStrings from the UI controller
        var DOMStrings = UICtrl.getDOMStrings();

        // when the button is clicked
        // the function after the click is an anonymous function, now it's the ctrlAddItem function which will be
        // executed after the click button. It's not good practice to add all the logic right after the anonymous function
        document.querySelector(DOMStrings.inputBtn).addEventListener('click', ctrlAddItem);

        // key press event listner, on the global document that's why not a css class is selected.
        // the function after the click is an anonymous funciton, we will now pass an argument into the function
        // the argument will be called event
        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOMStrings.container).addEventListener('click', ctrlDeleteItem);
    };

    var updateBudget = function () {

        // 1. calculate the budget
        budgetCtrl.calculateBudget();

        // 2. return the budget (each function has it's own task), a return function in the budget controller.
        var budget = budgetCtrl.getBudget();

        // 3. display the new budget on the UI, use the returned budget object 
        UICtrl.displayBudget(budget);
        console.log(budget);
    };

    var updatePercentages = function () {

        // 1. calculate the percentages
        budgetCtrl.calculatePercentages();

        // 2. get and return percentages from the budget controller
        var percentages = budgetCtrl.getPercentage();
        console.log('hier staan de input percentages');
        console.log(percentages);

        // 3. update the UI with the new percentages
        UICtrl.displayPercentage(percentages);

    };

    var ctrlAddItem = function () {
        var input, newItem;

        // 1. get the Object fields input data back from the UIController.
        input = UICtrl.getInput();
        console.log('hieronder staan de GUI input waarde');
        console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. add the item (expense or income) to the budgetController
            // addItem method returns an object so we need to save it in a variable.
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. add the new item to the UIController
            UICtrl.addListItem(newItem, input.type);

            // 4. clear the fields of the input in the UI
            UICtrl.clearFields();

            // 5. calculate and update the budget 
            updateBudget();

            // 6. calculate and update the percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function (event) {
        // to know what the target html element is, we will pass the event in the function
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        // console.log(itemID);

        if (itemID) {

            // inc-1 or inc-0
            splitID = itemID.split('-');
            type = splitID[0]; //inc
            ID = parseInt(splitID[1]); // 0 or 1 or whatever, but first we need to convert it to a integer. 
            // It came out of the SplitID string

            // 1. delete item from data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. update and show the new budget
            updateBudget();

            // 4. calculate and update the percentages
            updatePercentages();
        }
    };

    return {
        init: function () {
            console.log('Application has started!');
            setUpEventListners();
            // pass in the budget object / similar to the budget object but set them to 0
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    };
})(budgetController, UIController);

controller.init();