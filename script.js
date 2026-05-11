//Räkna Kraft

function raknaKraft() {
    let m = document.getElementById("massa").value;
    let a = document.getElementById("acceleration").value;

    //Kollar så att något av fälten inte är tomma
    if(m ===""|| a ===""){ 
    document.getElementById("resultat").innerText =
        "Fyll i alla värden";
        return;
    }

    let F = m * a;

    document.getElementById("resultat").innerText =
        // Visar både svaret och formeln som användes
document.getElementById("resultat").innerHTML = 
    `Kraften är: ${F} N(Beräknat via: ${m} kg * ${a} m/s²)`;
}

//Räkna Energi

function raknaEnergi() {
    let m = document.getElementById("massaE").value;
    let v = document.getElementById("hastighet").value;

    if(m ===""|| v ===""){
    document.getElementById("resultatE").innerText =
        "Fyll i alla värden";
        return;
    }

    m = Number(m);
    v = Number(v);
    
    let E = 0.5 * m * v * v;

    document.getElementById("resultatE").innerText =
        "Energin är: " + E + " J" + "    (Uträckning: 0.5 * " + m + " kg *" + v + "m/s²)"
}

//formulär som är skyddad

function visaNamn() {
    let namn = document.getElementById("namn").value;

    if (namn === "") {
        document.getElementById("namnOutput").innerText = "Skriv ditt namn";
        return;
    }
    // xss skydd
    function visaNamn() {
    let namn = document.getElementById("namn").value;

    if (namn === "") {
        document.getElementById("namnOutput").innerText = "Skriv ditt namn";
        return;
    }

    // Rensar bort farliga tecken
    namn = namn.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Skriver ut hälsningen i HTML-elementet
    document.getElementById("namnOutput").innerText = "Hej " + namn;
}
function rensare() {
    // Rensar alla input-rutor
    const ids = ["massa", "acceleration", "massaE", "hastighet", "namn"];
    const outputIds = ["resultat", "resultatE", "namnOutput"];

    ids.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.value = "";
        }
    });

    outputIds.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.innerText = "";
        }
    });
}
// einsteins relativitet
function raknaRelativitet() {
    let m = document.getElementById("massaM").value;
    const c = 299792458;

    if (m === "") {
        document.getElementById("resultatM").innerText = "Ange massa";
        return;
    }

    let E = m * (c ** 2);

    document.getElementById("resultatM").innerHTML = 
        "Energi: <strong>" + E.toExponential(2) + " Joule</strong><br>" +
        "<small>Uträkning: " + m + " * " + c + "²</small>";
}