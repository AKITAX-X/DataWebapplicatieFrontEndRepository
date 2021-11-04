function Testnaam ()
{
    alert("Dit is de testfunctie")
}

function AliClickt () {
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log(this.responseText);
            var result = JSON.parse(this.responseText);
            document.getElementById("mijnelement").innerHTML = result[0];
        }
        
    }
    vanmij.open("GET", "https://localhost:44344/api/Ali", true);
    vanmij.send();
}

function alleProductenTonenInTabel(){
    let nieuwverzoek = new XMLHttpRequest();
    nieuwverzoek.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log(this.responseText);
            var arrayMetProducten = JSON.parse(this.responseText);
            var tabelelem = document.getElementById("productenTabel");
            tabelelem.innerHTML = "";
            tabelelem.innerHTML += "<tr><th>naam</th><th>prijs</th><th>omschrijving</th></tr>";
            for( var i = 0 ; i < arrayMetProducten.length ; i++  ){
                tabelelem.innerHTML += " <tr><td>"+ arrayMetProducten[i].naam +"</td><td>"+ arrayMetProducten[i].prijs +"</td><td>"+ arrayMetProducten[i].specificaties +"</td></tr>";
            }
        }
    }
    nieuwverzoek.open("GET","https://localhost:44344/api/Ali/LijstProducten",true);
    nieuwverzoek.send();
}

function savetabel()
{
    var productNaam = document.getElementById("PnaamPprijs").value
    let saveproduct = new XMLHttpRequest();
    saveproduct.onreadystatechange = function()
    {
        console.log(this.responseText)
    }

    saveproduct.open("GET", "https://localhost:44344/api/Ali/Product1/" +  productNaam,true);
    saveproduct.send();
}