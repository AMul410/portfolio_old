// Default Hello World.
console.log("Hello World!");

// Deklaration und Initialisierung der Variablen.
//!!!!Achtung!!!!
// Das var-keyword benutzt man heute nicht mehr! Es gibt keine Ausnahme!
var x = 10;

// Ganz normales deklarieren und initialisieren eine Variablen.
// Variable ist mutable (modifizierbar).
let y = "Hello Antikapitalister Untergrund!"
let y2 = "!!!"
// Concatenation // Verkettung
let q = y + y2;
console.log(q);

// Variable ist unmutable (nicht veränderbar[e Referenz]).
const z = true;

// String Interpolation
console.log(`Test Interpolation ${x} und dann noch ${z}`);

greeting("Hier könnte Ihre Werbung stehen!");

// In Javascript gibt es Datentypen, werden aber nicht vom Interreter überprüft.
// Heißt: keineTypensicherheit // no Strong-Typing.
// Hoisting: Function are compiled first before Statements.
function greeting(message) {
    console.log("Hello und Wilkommen!")
    console.log(`Schönes Wetter haben wir, übrings... \n${message}`);
}

// Primitive Values => Wertetypen 
// Alle primitiven Typen haben eine Klasse (eg. String oder Number) mit Helfermethoden.
const my_string = "10"; //Console.Readline()
const user_input = Number.parseInt(my_string);

// Boolean
// 0 oder 1; true oder false
const my_bools = false;
if (my_bools) {
    console.log("Dieser Text wird niemals ausgegeben.");
}

// Numbers
// Ints, Floats, Decimals, Doubles, Longs gibt es nicht!
// In JS gibt es nur einen Datentype für Zahlen.

let my_number1 = 10;
let my_number2 = 5.2;

// Achtung: Vorsicht!
// vor allem bei division muss man in JS Error-checking einbauen.
if (my_number2 != null || my_number2 != 0) {
    const result = my_number1 / my_number2;
}

const num1 = 0.1;
const num2 = 0.2;
console.log(num1 + num2); // Floating-Point Rounding Error
// Verhält sich genau wie im Dezimalsystem 
// 0.33333 +0.333333 + 0.33333 = 1.

// String
// Verkettungen von Chars - Char-Array in C#
// In JS gibt es nur Strings, keine Chars

const my_string1 = "ABC";
const my_string2 = "ABC";
const my_string3 = "Error: Variable 'x' is not valid....";
//Interpolated String - Template String
// Kann über mehrere Zeilen gehen, aber mit übernahme der Formattierung
const my_interpolated = `${my_string1} ${my_string2}`;

let variable_string = "abc";
variable_string = "def"; // Hier wird der Variablen eine neue Referenz auf einen neuen String gegeben.
// Der String "abc" ist wie alle Strings immutable (nicht veränderbar).
console.log(variable_string);
/**
 * NUll Vs Undifined
 * 
 * Undefined bekommt meist, wenn eine Variable Deklariert aber Nicht Initialisiert ist oder es irgendeinen anderen Fehler von JS gibt.
 * NULL ist ein Signal, dass ich einen fehler beim Aufrufen einer Methode oder Funktion mit falschen Parametern oder ähnliches aufgerufen hat.
 */

console.log(variable_string.toUpperCase());

// Nur Deklaration
let oma;
//console.log(oma);
let emoji = get_emoji("so lala...");
if (emoji != null) {
    console.log(emoji);
}

function get_emoji(feeling) {
    if (feeling =="sad") {
        return "😥";
    }
    else if (feeling == "happy") {
        return "😀";
    }
    else {
        return null;
    }   

}

// Komplexe Datentypen => Referenztypen

// Date
let now = new Date();
const feierabend = now.setHours(16);
console.log(new Date(feierabend).toLocaleTimeString());

// Konvertiere String in Datum.
const my_time = new Date("1.1.2020");
console.log(my_time.toLocaleDateString());



class Weinbergschnecke {
    constructor(name, schleimmenge) {
        this.name = name;
        this.schleimmenge = schleimmenge;
    }
    get reichweite() {
        return this.schleimmenge / 10;
    }
    set tanken(menge) {
        this.schleimmenge = this.schleimmenge + menge
    }
    schlunzen() {
        if (this.schleimmenge >= 10) {
            console.log(`${this.name} schlunzt 1 Meter nache vorne.`);
            this.schleimmenge = this.schleimmenge - 10;
        }else {
            console.log(`${this.name} hat nicht genug schleim und kann sich nicht mehr bewegen.`);
        }       
    }
}

const schnegge = new Weinbergschnecke("Josef", 30);
console.log(schnegge.name);
schnegge.schlunzen();
schnegge.schlunzen();
schnegge.schlunzen();
console.log(schnegge.schleimmenge);
console.log(schnegge.reichweite);
schnegge.tanken = 10;
console.log(schnegge.schleimmenge);
