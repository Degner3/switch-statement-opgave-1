

// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayText" 
// efter hvilken dag det er i dag.

const todayText = document.getElementById('today');
// Denne variabel angiver dagen det er i dag. Hvis det er mandag, er
// variablen "0" som værdi, hvis det er tirsdag er den "1" osv.
let todayDate = new Date().getDay();

switch (new Date().getDay()) {
    case 0:
        day = "Søndag";
        break;
    case 1:
        day = "Mandag";
        break;
    case 2:
        day = "Tirsdag";
        break;
    case 3:
        day = "Onsdag";
        break;
    case 4:
        day = "Torsdag";
        break;
    case 5:
        day = "Fredag";
        break;
    case 6:
        day = "Lørdag";
        break;
    default:
        break;
}

document.getElementById("today").innerHTML = "I dag er det " + day;


// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayType" 
// efter om det i dag er en hverdag eller weekend

const todayType = document.getElementById('type');

switch (new Date().getDay()) {
    case 0:
        day = "Weekend";
        break;
    case 1:
        day = "Hverdag";
        break;
    case 2:
        day = "Hverdag";
        break;
    case 3:
        day = "Hverdag";
        break;
    case 4:
        day = "Hverdag";
        break;
    case 5:
        day = "Hverdag";
        break;
    case 6:
        day = "Weekend";
        break;
    default:
        break;
}

document.getElementById("type").innerHTML = "og det er en " + day;