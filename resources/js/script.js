/* var johnHeight = 150;
var johnAge = 45;
var carlHeight = 178;
var carlAge = 45;

var totalJohn = johnHeight + 5 * johnAge;
var totalCarl = carlHeight + 5 * carlAge;

if (totalJohn > totalCarl){
    console.log('John won the contest' + ' ' + 'with a score of: ' + totalJohn + ' and Carl had a score of ' + totalCarl);
} else if (totalCarl === totalJohn) {
    console.log('Johan and Carl have both the same value:' + 'Johns total: ' + totalJohn + 'The total of Carl: ' + totalCarl);
} else {
        console.log('Carl won the contest' + ' ' + 'with a score of: ' + totalCarl + ' and Carl had a score of ' + totalJohn);
}

var marcHeight = 175;
var marcAge = 65;
var totalMarc = marcHeight + 5 * marcAge;
console.log('total of John: ' + totalJohn);
console.log('total of Carl: ' + totalCarl);
console.log('total of marc: ' + totalMarc);

if (totalJohn > totalCarl && totalJohn > totalMarc){
    console.log('John is the overall winner!');
} else if (totalCarl >totalJohn && totalCarl > totalMarc){
    console.log('CArl won the contest' + ' ' + 'with a score of: ' + totalCarl);
} else if (totalCarl === totalJohn) {
    console.log('John and Carl have both the same value:' + 'Johns total: ' + totalJohn + 'The total of Carl: ' + totalCarl);
} else {
        console.log('it\'s a draw' );
}
*/

function calculateAge(dateOfBirth){
    var age = 2016 - dateOfBirth;
    return age;
    
}

var ageJohn = calculateAge(1971);
var ageMary = calculateAge(1956);
var agePeter = calculateAge(1968);

console.log(ageJohn);
console.log(ageMary);
console.log(agePeter);

//uitrekenen wanneer iemand met pensioen mag.
//naam van de persoon en de leeftijd van de persoon
// uitrekenen hoeveel jaar de persoon nog moet werken
function ageUntilRetirement(name, year){
    var age = calculateAge(year);
    var yearsToRetirement = 65 - age;
    console.log(name + ' retires in the year ' +  yearsToRetirement);
}

ageUntilRetirement('lino', 1971);
ageUntilRetirement('Suzan', 1972);
ageUntilRetirement('Ton', 1965);
