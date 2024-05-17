// Cookies in JS
// sind ein prop vom document   
// cookies werden in Schlüssel=Wert-Paaren gespeichert
// Cookies können auch in den browser-dev Tools unter dem Reiter Anwendung => Speicher => Cookies ausgelesen werden

// 3 Funktionen

// Funktion um Cookies zu erstellen
function setCookie(cookieName, cookieValue, expireDays=0) {
    const currentDate = new Date().getTime();
    // Gibt uns die nötigen Millisekunden um das entsprechende Datum zu generieren
    const expireDate = new Date().setTime(currentDate + (expireDays*24*60*60*1000));
    // Erstellt das Datum und fügt es in den String ein
    const expiration = `expires=${new Date(expireDate).toUTCString()};`;
    console.log(expiration);
    // Hier wird der Cookie gesetzt
    document.cookie = `${cookieName}=${cookieValue};${expiration}`;
}

// Funktion um Cookies anzuzeigen
function getCookies() {
    const cookies = document.cookie;
    document.querySelector("#output").innerText = cookies;
}

// Funktion um Cookies zu löschen
function deleteCookie(cookieName) {
    // Wenn wir einen Cookie löschen wollen, müssen wir das expiration Date auf ein Datum in der Vergangenheit setzen
    document.cookie = `${cookieName}=; expires=${new Date(0).toUTCString()}`;
}

const showCookie = document.querySelector("#showCookies");
showCookie.addEventListener("click", getCookies);
const deleteCookies = document.querySelector("#deleteCookies");
deleteCookies.addEventListener("click", () => {
    deleteCookie("consent");
});

const consentCookies = document.querySelector("#consent");
consentCookies.addEventListener("click", () => {
    setCookie("consent", "yes", 50);
    document.querySelector(".cookie-banner").style.display = "none";
});

// Versteckt das Cookie "banner" falls der cookie bereits gesetzt ist
function showBanner() {
    const cookies = document.cookie;
    if(cookies.includes("consent")) {
        document.querySelector(".cookie-banner").style.display = "none";
    }
    else {
        document.querySelector(".cookie-banner").style.display = "block";
        document.querySelectorAll(".cookie-banner");
    }
}

// Event wird ausgelöst, sobald die Seite fertig geladen hat
window.addEventListener("load", showBanner);

deleteCookies.addEventListener("click", showBanner);


// Session und LocalStorage
// Gültigkeit
// Session Storage nur während der Browsersitzung gültig
// Local Storage gilt solange bis er lokal gelöscht wird
// Daten werden nicht an den Server übertragen
// PRo Verbindung, d.h. bei http und https Seiten zwei getrennte Storages
// Maximale Größe: OS und Browser abhängig => HTML5 Spezifikation (5MB)
localStorage.setItem("schlüssel", "wert");
sessionStorage.setItem("schlüssel", "wert");

