productids = [];
window.onload = function () {
    //var bestellingproductids = [];
    var bestellingproductids = JSON.parse(localStorage.getItem("geheimesleutelvancheapswinkel"));
    const urlParams = new URLSearchParams(window.location.search);
    const productid = urlParams.get('productid');
    bestellingproductids.push(productid);
    localStorage.setItem("geheimesleutelvancheapswinkel", JSON.stringify(bestellingproductids));
    productids = bestellingproductids;
    toonbestelling();
}
function toonbestelling() {
    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText)
            bestellingarray = JSON.parse(this.responseText)
            var overz = document.getElementById("overzicht");
            overz.innerHTML = "<tr><th>YourCart</th><th>Price</th><th>Amount</th><th>DeleteButton</th></tr>";
            console.log(bestellingarray.length)
            for (var x = 0; x < bestellingarray.length; x++) {
                overz.innerHTML += ` <tr><td>${bestellingarray[x].klantNaam}</tr>`;
                // </td><td>${productids[x]}</td><td>${productids[x]}</td><td>${productids[x]}</td>
            }
        }

    }
    vanali.open("GET", "https://localhost:44344/api/Bestelling/alleBestellingen", true);
    vanali.send();
}

// tabelelem.innerHTML = "<tr><th>naam</th><th>prijs</th><th>omschrijving</th><th>acties</th></tr>";
// for(var i = 0; i < arrayMetProducten.length; i++ )

// {
//     tabelelem.innerHTML += "<tr><td>"+arrayMetProducten[i].naam + "</td><td>"+arrayMetProducten[i].prijs + 
//     "</td><td>"+arrayMetProducten[i].specificaties + "</td><td> <input type='button' onclick='verwijderProduct("+ arrayMetProducten[i].id
//     +")' value='Verwijder'></td></tr>";

function voegNaamToe(){
    var xhr = new XMLHttpRequest();
    var klantNaam = document.getElementById("klantnaam-input").value;
    console.log(klantNaam)
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            document.getElementById("klantnaam-input").value = this.responseText;
        }
    }
    xhr.open("GET",`https://localhost:44344/api/bestelling/voegBestellingToe/${klantNaam}`,true);
    //xhr.setRequestHeader("Content-Type","application/json");
    xhr.send();

}