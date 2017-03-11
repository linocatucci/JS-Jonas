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


})();

var UIController = (function () {

    return {
        getInputData: function () {
            return {
                inputType: document.querySelector('.add__type').value,
                inputDescription: document.query
            }
        },
        getDOMStrings
    }


})();

var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        console.log('click het werkt!')

    }

    // - eventhandler op de knop en op de enter toets
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // eventlistner for enter key

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            console.log('ook enter werkt');
        }
    });





})(budgetController, UIController);