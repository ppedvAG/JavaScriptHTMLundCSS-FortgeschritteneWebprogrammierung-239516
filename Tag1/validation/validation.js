
const passwordInp = document.querySelector("#password");

passwordInp.addEventListener("focus", function (ev) {
    if(passwordInp.validity.valueMissing) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange dieser kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity("Das Passwort darf nicht leer sein.");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

// Mögliche validity Props
/*

    patternMismatch - INhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    rangeOverflow - Wert höher ist als im max-Attribut bestimmt
    rangeUnderflow - Wert niedriger ist als im min-Attribut bestimmt
    typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
    valid - Gibt true zurück, wenn alles gültig ist
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist

*/

passwordInp.addEventListener("keyup", function(ev) {
    if(passwordInp.validity.tooShort) {
        passwordInp.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInp.value.length} Zeichen.`);
        passwordInp.reportValidity();
    } else {
        passwordInp.setCustomValidity("");
    }
})

document.querySelector("form").addEventListener("submit", function(ev) {
    // Auf die Form angewendet verhindert event.preventDefault() das Neuladen der Seite bei senden der Form
    ev.preventDefault();
})


const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");

function checkPLZ() {
    let constraints = {
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 or 1950"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 or 75012"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. D-12345 or 12345"]
    }

    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    let constraint = new RegExp(constraints[countryValue][0], "");

    if(constraint.test(zipCodeValue)) {
        zipCode.setCustomValidity("");
    }
    else {
        zipCode.setCustomValidity(constraints[countryValue][1]);
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPLZ);
country.addEventListener("input", checkPLZ);