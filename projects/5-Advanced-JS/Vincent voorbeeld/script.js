/*
Wat ik in zo’n geval altijd doe is “uitkleden” tot de basis, zie bijlage.

*/

// 1. deze function retourneert een functie die een getal kan tonen
function geefGetalToonFunctie() {
  return function(getal)
  {
    console.log(getal);
  }
}
// 2. deze variable bevat nu de functie die een getal kan tonen
var getalToonFunctie=geefGetalToonFunctie() 

// 3. de functie die een getal kan tonen wordt nu aangeroepen (met een getal)
getalToonFunctie(5) 

//1. deze functie geeft een hello tekst terug met de naam (input)
function geefEenHalloTekstFunctie () {
    return function(naam){
        console.log("Hallo " + naam);
    }
};

var halloTekstToonFunctieLino = geefEenHalloTekstFunctie ();
halloTekstToonFunctieLino('Lino');
halloTekstToonFunctieLino('Aytac');

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
};

// maak een var met functie van het eerste deel
// daarna die variabele aanroepen met de input parametern van de 2e functie (yearOfBirth)
var retirementUS = retirement(66);
retirementUS(1990);
// kan ook zo aangeroepen worden
retirement(66)(1990);

var retirementNL = retirement(65);
var retirementIceland = retirement(67)

function berekenAfschrijving(totaalPrijs){
    return function(jaarAfschrijving){
        var jaarAfschrijvingTotaal = totaalPrijs / 100 * jaarAfschrijving;
        console.log('dit is de afschrijfing voor een BMW ' + jaarAfschrijvingTotaal);
    }
};

var afschrijfingBMW = berekenAfschrijving(30000);
var afschrijfingAudi = berekenAfschrijving(35000);
afschrijfingBMW(10);
afschrijfingAudi(15);

//var afschrijvingAudi = berekenAfschrijving(30000);
// var jaarAfschrijvingBedrag = 30000 / 100 * 10
//afschrijvingAudi(10);

function geeftEenGetalTerug(){
    return function(getal){
        console.log ('dit is een getal ' + getal);
    }
}

var toonGetal = geeftEenGetalTerug ();
//toonGetal(4);


function geeftEenGetalTerug(getal){
    //return function(getal)
    {
        console.log ('dit is een getal ' + getal);
    }
};
geeftEenGetalTerug(111111);