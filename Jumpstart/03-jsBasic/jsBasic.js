// Einzeiliger Kommentar

/*
    Mehrzeiliger Kommentar
*/

console.log("Hallo Welt!"); // einfache Ausgabe
console.error("Da lief was schief"); // Wird als Fehler ausgegeben
console.info("Ich bin eine Infomation"); // Wird im Firefox mit Info zeichen dargestellt


// Variable definieren

// Moderne Varianten:
let firstName = "Max";
// Identifier muss immer mit Buchstaben, _ oder $ beginnen
// Identifier ist Case Sensitive
let age = 18;
// Variablen die mit let definiert wurden dürfen verändert werden

// Alternative zu let
const lastName = "Mustermann";
// Funktioniert wie let, kann aber nicht neuzugewiesen werden

// Wie gebe ich diese Variablen in der Konsole aus?
console.log(firstName); 

// Mit weiterem String kombinieren:
console.log("Hallo " + firstName + " " + lastName);

// Interpolierter String
console.log(`Hallo ${firstName} ${lastName}`);

// Scope 
// Unterschied zwischen let, const und var

let x;
var y;
const z = 5;

// 1. Unterschied: const muss sofort mit einem Wert initialisiert werden
// var und let können später initialisiert werden
x = 15;
y = 12;

// 2. Unterschied: var legt ein globales Objekt an
// let hingegen nicht

// 3. Unterschied: hoisting
// hoisting geht nur mit var
// Geht:
w = 15;
console.log(w);
var w;
// Wenn wir ganz ohne Keyword einer Variable einen Wert zuweisen wird als globale Eigenschaft
// des window-Objekts erstellt
// Geht nicht
//ww= 15;
//console.log(ww);
//let ww;
// SCHLECHTE FORM

// 4. Unterschied:
// var kennt den Blockscope nicht
// let schon
{
    let block1 = "Hallo!";
    var block2 = "Bye!";
    console.log(block1);
}
//console.log(block1); // Hier scheitert der Aufruf, da block1 nur innerhalb des Blockes von Zeile 66 bis 70 bekannt ist
console.log(block2); // Das funktioniert, da var den Blockscope nicht kennt

// Scopes in JavaScript
// Globaler Scope => Variable ist im gesamten Script aufrufbar
// Function Scope => Variable ist innerhalb der gesamten Funktion aufrufbar
// Block Scope => Variable ist nur in dem Block in dem sie definiert wurde aufrufbar

// Kleine Aufgabe:
// Definiere zwei Variablen vom Type number
// FÜhre eine beliebige Arithmetische Operation mit den beiden Variablen aus und weise das Ergebnis
// einer Konstanten zu
// Lass die Konstante in der Konsole ausgeben
var v1 = 15;
var v2 = 6;
const c1 = v1 * v2;
console.log(c1);