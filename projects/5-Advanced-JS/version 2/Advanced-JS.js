// Advanced JavaScript:

var john = {
    name: 'John',
    LastName: 'Miller',
    calculateAge: function (yearOfBirth) {
        this.age = 2016 - yearOfBirth;
    }

};
console.log(john);
john.calculateAge(1971);