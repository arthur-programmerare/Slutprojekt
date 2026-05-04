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
        "Kraften är: " + F + " N";
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