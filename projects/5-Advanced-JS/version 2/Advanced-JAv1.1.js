// Advanced JavaScript:
// object old style
// Function constructor

var Person = function (name, lastName, sex, yearOfBirth, income) {
    this.name = name;
    this.lastName = lastName;
    this.sex = sex;
    this.yearOfBirth = yearOfBirth;
    this.income = income;
}


var lino = new Person('lino', 'catucci', 'm', 1980, 16800);
console.log(lino);

Person.prototype.calculateAge = function () {
    this.age = 2017 - this.yearOfBirth;
}
Person.prototype.calculateTaxes = function () {
    this.modaal = false
    this.taxes = ((this.income / 100) * 22);
    console.log(this.taxes);
    if (this.taxes >= 300) {
        return this.modaal = true;
    } else {
        return false;
    }
};

lino.calculateAge();
lino.calculateTaxes();

var suzan = new Person('Suzan', 'Catucci', 'v', 1985, 17500);
console.log(suzan);

suzan.calculateAge();
suzan.calculateTaxes();

// callback functions