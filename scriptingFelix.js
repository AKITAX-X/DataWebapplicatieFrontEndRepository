function ffproberen() {
    console.log("in ffproberen");
    var a = "hoi";
    var testmultiline = `
        <div>dit</div>
        zijn
        ${a}
        meerdere lijnen
    `
    document.getElementById("snelchecken").innerHTML = testmultiline;
}
function voegBestellingToe() {
    let bestellingObj = {};
    bestellingObj.klantNaam = document.getElementById("klantnaaminvoer").value;
    let bestellingJSON = JSON.stringify(bestellingObj);
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("terug van voegbestellingtoe");
        }
    }
    vanmij.open("POST", "https://localhost:44344/api/Bestelling/voegBestellingToe", true);
    vanmij.setRequestHeader("Content-Type", "application/json");
    vanmij.send(bestellingJSON);
}
function toonAlleBestelling() {
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var arrayMetBestelling = JSON.parse(this.responseText);
            var tabelelem = document.getElementById("tabelBestellingen");
            tabelelem.innerHTML = "";
            tabelelem.innerHTML += "<tr><th>naam</th><th>prijs</th><th>omschrijving</th></tr>";
            for (var i = 0; i < arrayMetBestelling.length; i++) {
                tabelelem.innerHTML += " <tr><td onclick=ziedetails(" + arrayMetBestelling[i].id + ")>" + arrayMetBestelling[i].datum + "</td><td>" + arrayMetBestelling[i].status + "</td><td>" + arrayMetBestelling[i].klantNaam + "</td></tr>";
            }
        }
    }
    vanmij.open("GET", "https://localhost:44344/api/Bestelling/alleBestellingen", true);
    vanmij.send();
}
function ziedetails(hetid) {
    window.location = 'demodetail.html?bid=' + hetid;
}
function mijnfunctie() {
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var hetantwoord = JSON.parse(this.responseText);
            document.getElementById("uitkomst").innerHTML = hetantwoord[0];

        }
    }
    vanmij.open("GET", "https://localhost:44344/api/Ali", true);
    vanmij.send();
}
function alleProductenTonenInTabel() {
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var arrayMetProducten = JSON.parse(this.responseText);
            var tabelelem = document.getElementById("productenTabel");
            tabelelem.innerHTML = "";
            tabelelem.innerHTML += "<tr><th>naam</th><th>prijs</th><th>omschrijving</th></tr>";
            for (var i = 0; i < arrayMetProducten.length; i++) {
                tabelelem.innerHTML += " <tr><td>" + arrayMetProducten[i].naam + "</td><td>" + arrayMetProducten[i].prijs + "</td><td>" + arrayMetProducten[i].specificaties + "</td></tr>";
            }
        }
    }
    vanmij.open("GET", "https://localhost:44344/api/Ali/LijstProducten", true);
    vanmij.send();
}
function checkdetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const bestellingid = urlParams.get('bid');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
        }
    }
    xhr.open("GET", "https://localhost:44344/api/bestelling/" + bestellingid, true);
    xhr.send();
}
