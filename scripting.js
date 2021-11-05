// function Testnaam ()
// {
//     alert("Dit is de testfunctie")
// }

// function AliClickt () {
//     let vanmij = new XMLHttpRequest();
//     vanmij.onreadystatechange = function(){
//         if(this.readyState == 4){
//             console.log(this.responseText);
//             var result = JSON.parse(this.responseText);
//             document.getElementById("mijnelement").innerHTML = result[0];
//         }
        
//     }
//     vanmij.open("GET", "https://localhost:44344/api/Ali", true);
//     vanmij.send();
// }

// function alleProductenTonenInTabel(){
//     let nieuwverzoek = new XMLHttpRequest();
//     nieuwverzoek.onreadystatechange = function(){
//         if(this.readyState == 4){
//             console.log(this.responseText);
//             var arrayMetProducten = JSON.parse(this.responseText);
//             var tabelelem = document.getElementById("productenTabel");
//             tabelelem.innerHTML = "";
//             tabelelem.innerHTML += "<tr><th>naam</th><th>prijs</th><th>omschrijving</th></tr>";
//             for( var i = 0 ; i < arrayMetProducten.length ; i++  ){
//                 tabelelem.innerHTML += " <tr><td>"+ arrayMetProducten[i].naam +"</td><td>"+ arrayMetProducten[i].prijs +"</td><td>"+ arrayMetProducten[i].specificaties +"</td></tr>";
//             }
//         }
//     }
//     nieuwverzoek.open("GET","https://localhost:44344/api/Ali/LijstProducten",true);
//     nieuwverzoek.send();
// }

// function savetabel()
// {
//     var productNaam = document.getElementById("PnaamPprijs").value
//     let saveproduct = new XMLHttpRequest();
//     saveproduct.onreadystatechange = function()
//     {
//         console.log(this.responseText)
//     }

//     saveproduct.open("GET", "https://localhost:44344/api/Ali/Product1/" +  productNaam,true);
//     saveproduct.send();
// }

// function voegProductToe(){
//     let productObj = {};
//     productObj.naam = document.getElementById("Productnaam invoer").value;
//     let productJSON = JSON.stringify(productObj);
//     let vanali = new XMLHttpRequest();
//     vanali.onreadystatechange = function(){
//         if(this.readyState == 4){
//             console.log("terug van voeg product toe");
//         }
//     }    
//     vanali.open("POST","https://localhost:44344/api/Ali/voegProductToe",true);
//     vanali.setRequestHeader("Content-Type","application/json");
//     vanali.send(productJSON);
// }


function voegProductToe(event){

    
    event.preventDefault();
    console.log(event);
    const elements = event.target.elements
    let productObj = {};

    productObj.naam = elements.productNaamInvoer.value;
    productObj.prijs = parseFloat(elements.productPrijsInvoer.value);
    productObj.specificaties = elements.productSpecsInvoer.value;
    
    let productJSON = JSON.stringify(productObj);
    let vanali = new XMLHttpRequest(); 
    vanali.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log("terug van voeg product toe");
        }
    }    
    vanali.open("POST","https://localhost:44344/api/Ali/voegProductToe",true);
    vanali.setRequestHeader("Content-Type","application/json");
    console.log(productJSON)
    vanali.send(productJSON);
}

function deleteRow(event){
    const element = event.target
    const id = element.getAttribute("data-id")
    console.log(id)

}




function toonAlleProducten(){
    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function(){
    if(this.readyState == 4){
        console.log(this.responseText);
        var arrayMetProducten= JSON.parse(this.responseText);
        var tabelelem = document.getElementById("tabelProducten");

        tabelelem.innerHTML = "<tr><th>naam</th><th>prijs</th><th>omschrijving</th><th></th></tr>";
        for(let i = 0; i < arrayMetProducten.length; i++ )

        {
            tabelelem.innerHTML += `
                <tr>
                    <td>${arrayMetProducten[i].naam}</td>
                    <td>${arrayMetProducten[i].prijs}</td>
                    <td>${arrayMetProducten[i].specificaties}</td>
                    <td><button data-id="${arrayMetProducten[i].id}" id="rowButton-${arrayMetProducten[i].id}">Delete user</button></td>
                </tr>
            `;

            
        }

        for(let i = 0; i < arrayMetProducten.length; i++ )
        {
            const buttonSelector = document.getElementById(`rowButton-${arrayMetProducten[i].id}`)
            buttonSelector.addEventListener("click", deleteRow)
            console.log(buttonSelector)
        }
        // tabelelem.innerHTML = "";
        // tabelelem.innerHTML += "<tr><th>naam</th><th>prijs</th><th>omschrijving</th></tr>";
        // for( var i = 0 ; i < arrayMetProducten.length ; i++  ){
        //     tabelelem.innerHTML += " <tr><td>"+ arrayMetProducten[i].naam +"</td><td>"+ arrayMetBestelling[i].prijs +"</td><td>"+ arrayMetBestelling[i].omschrijving +"</td></tr>";
        // }
}
}
vanali.open("GET","https://localhost:44344/api/Ali/alleProducten",true);
vanali.send();
}


const form = document.getElementById("productForm")
form.addEventListener("submit", voegProductToe)



