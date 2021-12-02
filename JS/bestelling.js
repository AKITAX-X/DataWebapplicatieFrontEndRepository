productids = [];
window.onload = function () {
    const bestellingproductids = JSON.parse(localStorage.getItem("cart") || {});
    productids = Object.values(bestellingproductids);
    toonbestelling();
}
function toonbestelling() {
    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText)
            bestellingarray = JSON.parse(this.responseText)
            var overz = document.getElementById("overzicht");
            overz.innerHTML = "<tr><th>Customer</th><th>Products</th><th>Amount</th><th>DeleteButton</th></tr>";
            for (var x = 0; x < bestellingarray.length; x++) {
                overz.innerHTML += `<tr><td>${bestellingarray[x].klantNaam}(${bestellingarray[x].id})</td><td>${prdct}</td><td></td><td><button onclick=verwijderBestelling(${bestellingarray[x].id})>verwijderen</button></td></tr>`;
                if (bestellingarray[x].besteldeProducten != null) {
                    for (var y = 0; y < bestellingarray[x].besteldeProducten.length; y++) {
                        var prdct = `${bestellingarray[x].besteldeProducten[y].product.naam}`
                    }
                }
            }
            






            /*for (var x = 0; x < bestellingarray.length; x++) {
                overz.innerHTML +="<div class=\"bestellingov\">"+bestellingarray[x].klantNaam+"("+bestellingarray[x].id+") <button onclick=verwijderBestelling("+bestellingarray[x].id+")>verwijderen</button>";
                if(bestellingarray[x].besteldeProducten != null){
                    for(var y = 0 ; y < bestellingarray[x].besteldeProducten.length ; y++){
                        overz.innerHTML +=  "<div class=\"itemov\">"+ bestellingarray[x].besteldeProducten[y].product.naam +"("+bestellingarray[x].besteldeProducten[y].productId+")" +"</div>";
                    }
                }else{
                    overz.innerHTML +=  "<div class=\"itemov\"> nog geen items geplaatst</div>";
                }
                overz.innerHTML += "</div>";*/

            /*
            tabelelem.innerHTML = "<tr><th>naam</th><th>prijs</th><th>omschrijving</th><th>acties</th></tr>";
        for (var i = 0; i < arrayMetProducten.length; i++) {
            tabelelem.innerHTML += "<tr><td>" + arrayMetProducten[i].naam + "</td><td>" + arrayMetProducten[i].prijs +
                "</td><td>" + arrayMetProducten[i].specificaties + "</td><td> <input type='button' onclick='verwijderProduct(" + arrayMetProducten[i].id
                + ")' value='Verwijder'></td></tr>";
            }
        */



        }

    }
    vanali.open("GET", "https://localhost:44344/api/Bestelling/alleBestellingen", true);
    vanali.send();
}

function verwijderBestelling(bestelid) {
    let productObj = {};

    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("verwijderd");
            window.location = window.location;
        }
    }
    vanali.open("GET", "https://localhost:44344/api/bestelling/verwijderbestelling/" + bestelid, true);
    vanali.send();
}
// tabelelem.innerHTML = "<tr><th>naam</th><th>prijs</th><th>omschrijving</th><th>acties</th></tr>";
// for(var i = 0; i < arrayMetProducten.length; i++ )

// {
//     tabelelem.innerHTML += "<tr><td>"+arrayMetProducten[i].naam + "</td><td>"+arrayMetProducten[i].prijs + 
//     "</td><td>"+arrayMetProducten[i].specificaties + "</td><td> <input type='button' onclick='verwijderProduct("+ arrayMetProducten[i].id
//     +")' value='Verwijder'></td></tr>";

function voegNaamToe() {
    var xhr = new XMLHttpRequest();
    var klantNaam = document.getElementById("klantnaam-input").value;
    console.log(klantNaam)
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            document.getElementById("klantnaam-input").value = this.responseText;
            window.location = window.location;
        }
    }
    xhr.open("GET", `https://localhost:44344/api/bestelling/voegBestellingToe/${klantNaam}`, true);
    //xhr.setRequestHeader("Content-Type","application/json");
    xhr.send();
}


function maakBestellingAan() {
    var deItems = localStorage.getItem("geheimesleutelvancheapswinkel");
    console.log(deItems);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("ready met post");
            //            document.getElementById("hetbestelnummer").value = this.responseText;
            voegProductToeAanBestelling();
        }
    }
    xhr.open("GET", "https://localhost:44344/api/bestelling/voegBestellingToe", true);
    //xhr.setRequestHeader("Content-Type","application/json");
    xhr.send();
}
function voegProductToeAanBestelling() {
    var xhr = new XMLHttpRequest();
    var bestelnummer = document.getElementById("hetbestelnummer").value;
    var productnummer = document.getElementById("hetproductnummer").value;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            //            document.getElementById("hetbestelnummer").value = this.responseText;
            window.location = window.location;
        }
    }
    xhr.open("GET", `https://localhost:44344/api/bestelling/voegProductToeAanBestelling/${bestelnummer}/${productnummer}`, true);
    //xhr.setRequestHeader("Content-Type","application/json");
    xhr.send();


}