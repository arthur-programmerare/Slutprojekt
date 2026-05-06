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

    let E = 0.5 * m * v * v;

    document.getElementById("resultatE").innerText =
        "Energin är: " + E + " J";
}

//formulär som är skyddad

function visaNamn() {
    let namn = document.getElementById("namn").value;

    if (namn === "") {
        document.getElementById("namnOutput").innerText = "Skriv ditt namn";
        return;
    }

     namn = namn.replace(/</g, "&lt;").replace(/>/g, "&gt;");
       "Hej " + namn;
       document.getElementById("namnOutput").innerText = "Hej " + namn;
}
function rensare() {
    // Rensar alla input-rutor
    document.getElementById("massa").value = "";
    document.getElementById("acceleration").value = "";
    document.getElementById("massaE").value = "";
    document.getElementById("hastighet").value = "";
    document.getElementById("namn").value = "";
    
    // Rensar texterna där resultaten stod
    document.getElementById("resultat").innerText = "";
    document.getElementById("resultatE").innerText = "";
    document.getElementById("namnOutput").innerText = "";
}