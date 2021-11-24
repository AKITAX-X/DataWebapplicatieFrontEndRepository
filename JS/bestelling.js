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
           // overz.innerHTML = "<tr><th>YourCart</th><th>Price</th><th>Amount</th><th>DeleteButton</th></tr>";
            console.log(bestellingarray)
            for (var x = 0; x < bestellingarray.length; x++) {
                overz.innerHTML +="<div class=\"bestellingov\">"+bestellingarray[x].klantNaam;
                if(bestellingarray[x].besteldeProducten != null){
                    for(var y = 0 ; y < bestellingarray[x].besteldeProducten.length ; y++){
                        //console.log(bestellingarray[x].besteldeProducten[y]);
                        overz.innerHTML +=  "<div class=\"itemov\">"+ bestellingarray[x].besteldeProducten[y].product.naam +"</div>";
                    }
                }else{
                    overz.innerHTML +=  "<div class=\"itemov\"> nog geen items geplaatst</div>";
                }
                overz.innerHTML += "</div>";
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