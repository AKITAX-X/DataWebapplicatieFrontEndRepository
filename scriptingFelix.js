
window.onload = function(){

    ffproberen();
}


function ffproberen(){
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






function mijnfunctie(){
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log(this.responseText);
            var hetantwoord = JSON.parse(this.responseText);
            document.getElementById("uitkomst").innerHTML = hetantwoord[0];

        }
    }
    vanmij.open("GET","https://localhost:44344/api/Ali",true);
    vanmij.send();
}
function alleProductenTonenInTabel(){
    let vanmij = new XMLHttpRequest();
    vanmij.onreadystatechange = function(){
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
    vanmij.open("GET","https://localhost:44344/api/Ali/LijstProducten",true);
    vanmij.send();
}
