// Funktionen
function greeter() {
    console.log("Hallo Welt");
}

greeter();


// Funktion mit Parametern
function greetPerson(name) {
    return "Hello " + name
}

// Funktionen können auch andere Funktionen als Parameter übergeben werden
console.log(greetPerson("Max Mustermann"));

function multiplier(numOne, numTwo) {
    return numOne * numTwo;
}

let ergebnis1 = multiplier(5, 25);

// Variablen können auch eine Funktion als Wert enthalten
let testX = multiplier;
console.log(testX(12, 44));
// Hier wird der identifier der Variable zum Alias der Funktion

// default-Werte
// Falls eine Funktion mit zu wenigen Parametern aufgerufen wird, können wir sie mit default-
// Parametern, also Fallback werten
function divide(numOne = 1, numTwo = 2) {
    return numOne / numTwo;
}

console.log(divide(10));


// Kontrollstrukturen
// if
let numberOne = 20;
let numberTwo = 30;

if(numberOne < numberTwo){
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
else if(numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
} else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung: === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

// Logische Operatoren
// && Logisches 1<2 && 1<3 => Nur true wenn beide bedingungen zutreffen
// || logische oder 1<4 && 1<-10 => Nur true wenn einer der Bedingungen wahr ist

// Übung:
// SChreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false sein
function isEven(n) {
    if(n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Ternary Operator
// Kurzschreibweise für if Blöcke
// (Bedingung) ? code-Block falls Wahr : code-Block falls falsch

// Loops | Schleifen in JS
// Ermöglichen das mehrfache ausführen eines Code-Blocks bis eine bestimmte
// Bedingung eintrift

// Fußgesteuerte SChleifen:
// do.. while
// Bedingung erst in der Fußzeile geprüft
// Schleife wird immer mindestens einmal ausgeführt

// for-Schleife
function countTo(limit) {
    console.log("Schleife startet:");
    for(let i = 0; i<=limit; i++) {
        console.log(i); // Würde nach jeder Zahl ausgegeben werden
    }
    console.log("Schleife beendet");
}

countTo(10);

// Verschachtelte Schleifen:
function clock() {
    for(let i= 0; i < 2 ; i++){
        for(let j = 0; j < 60; j++) {
            for(let k = 0; k < 60; k++) {
                console.log(`${i}:${j}:${k}`);
            }
        }
    }
}
clock()
// Funktioniert wie eine Uhr
// Bevor der Stunden Zeiger eins weiter tickt muss der Minuten Zeiger eine Umdrehung machen und bevor der Minuten Zeiger
// eins weiter tickt muss der Sekunden Zeiger einen ganzen Durchlauf gemacht haben


// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 und 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal auf der Konsole ausgegeben
// Wir wollen eine Funktion schreiben, die eine Obergrenze übergeben bekommt
// bis zu der gezählt werden soll und jede dieser Zahlen soll dann
// auf ihre Teilbarkeit durch 3 und 5 geprüft werden und nach den obigen Regeln in 
// der Konsole ausgegeben werden

/*
function fizzBuzzWhile(limit) {
    let answ = "";
    
    if(limit % 3 == 0) {
        answ += "Fizz";
    }
    if(limit % 5 == 0) {
        answ += "Buzz";
    }
    if(answ == "") {
        answ = `${limit}`
    }

    return answ;
}*/

function fizzBuzzWhile(limit) {
    let counter = 0;
    let answ = "";
    while(counter <= limit) {
        answ = "";
        if(counter % 3 === 0) {
            answ += "Fizz";
        }
        if(counter % 5 === 0) {
            answ += "Buzz";
        }
        if(answ === "") {
            console.log(counter);
        }
        else {
            console.log(answ)
        }
        counter ++; // ist wichtig, da wir sonst in eine endlosschleife laufen
    }
}