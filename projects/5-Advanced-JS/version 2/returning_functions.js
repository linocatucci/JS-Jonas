// Functions returning functions!!!

// 1. deze function retourneert een functie die een getal kan tonen

// 2. deze function retourneert een functie die een hallo text kan tonen

// 3. deze function retourneert een functie die een job en vraag kan tonen

// 1. deze function retourneert een functie die een getal kan tonen

function toonGetal() {
    return function (getal, naam) {
        console.log(getal + ' voor ' + naam);
    }
}

var getalVoorLino = toonGetal();
getalVoorLino(15, 'lino');