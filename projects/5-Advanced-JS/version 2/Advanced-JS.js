// Advanced JavaScript:
// object old style
// Function constructor

var john = {
    name: 'John',
    LastName: 'Miller',
    isMarried: false,
    calculateAge: function (yearOfBirth) {
        this.age = 2016 - yearOfBirth;
    }

};
console.log(john);
john.calculateAge(1971);

// Function Constructor to create a object, here the Person object.
// function called person, with a capital

var Person = function (name, yearOfbirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job;
}

var John = new Person('John', 1990, 'teacher');

console.log(John);




// Object Constructor
// Object constructor is a pattern for writing a blue print.

function Person(name, LastName, age, isMarried) {
    this.name = name;
    this.lastName = lastname;
    this.age = age;
    this.isMarried = isMarried;

}

Person.prototype.calculateAge = function (yearOfBirth) {
    this.age = 2016 - yearOfBirth;
}