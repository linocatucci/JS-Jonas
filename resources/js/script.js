/* var name = 'John';
var age = 26;
var job = 'teacher';

//console.log(name + ' ' + age + ' ' + job);

var tweedenaam = prompt('wat is je naam?');

console.log(tweedenaam);

alert(tweedenaam);

*/
//lecture : boolean lcogic and switch

var age = 20;

if (age < 20) {

    console.log('john is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');

} else {
    console.log('john is a man');
}

var job = 'cop';

job = prompt('what does john do?')

switch (job) {
case 'teacher':
    console.log('john teaches kids');
    break;
case 'driver':
    console.log('john drives taxis in Lisbon');
    break;
case 'cop':
    console.log('john helps fight crime');
    break;
default:
    console.log('john does something else');
}