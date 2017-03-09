// oefenen objecten, functions (functions callback and as input arguments)
var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;

}

// object to store the all items(expense or income object) and the total incomes and expenses
var data = {
    allItems: {
        exp: [],
        inc: []
    },
    totals: {
        exp: 0,
        inc: 0
    }
}

var exp1 = new Expense(1, 'fiets verkocht', 100);
var exp2 = new Expense(2, 'auto verkocht', 200);
var exp3 = new Expense(3, 'hengel verkocht', 50);
var exp4 = new Expense(4, 'plant verkocht', 25);
var exp5 = new Expense(5, 'laptop verkocht', 15);

data.allItems.exp.push(exp1, exp2, exp3, exp4, exp5);

console.log(data);

function loopOverExpenses(array) {

    for (var i = 0; i < array.length; i++) {

        console.log(array[i]);

        /*
        for(index=0; index<array.length; index++)
        {
            if(array.id==id) array.splice(…)
        }
 
        */
    }
}

console.log(loopOverExpenses(data.allItems.exp));

var index1 = data.allItems.exp //.indexOf(Expense);
console.log(index1);

var array = [2, 5, 9];
var index = array.indexOf(5);
console.log(index);

if (index > -1) {
    array.splice(index, 1);
    console.log(array);
}