function toevoegenProduct(){
    var teversturenproduct = {};
    teversturenproduct.naam = document.getElementById("user-box-name").value;
    teversturenproduct.prijs = parseInt(document.getElementById("user-box-price").value);
    teversturenproduct.specificaties = document.getElementById("user-box-specs").value;
    teversturenproduct.fotonaam = document.getElementById("user-box-foto").value;
    teversturenproduct.discount = parseInt(document.getElementById("user-box-discount").value);
    console.log(teversturenproduct);
    versturen(teversturenproduct);
}
function versturen(hetproduct){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){

    }
    xhr.open("POST", "https://localhost:44344/api/product/nieuwproduct", true);
    xhr.setRequestHeader("Content-Type","application/json");
    var objJSON = JSON.stringify(hetproduct)
    xhr.send(objJSON);
}

function toonAlleProducten(){
    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function(){
    if(this.readyState == 4){
        console.log(this.responseText);
        var arrayMetProducten= JSON.parse(this.responseText);
        var tabelelem = document.getElementById("tabelProducten");

        tabelelem.innerHTML = "<tr><th>naam</th><th>prijs</th><th>omschrijving</th><th>acties</th></tr>";
        for(var i = 0; i < arrayMetProducten.length; i++ )

        {
            tabelelem.innerHTML += "<tr><td>"+arrayMetProducten[i].naam + "</td><td>"+arrayMetProducten[i].prijs + 
            "</td><td>"+arrayMetProducten[i].specificaties + "</td><td> <input type='button' onclick='verwijderProduct("+ arrayMetProducten[i].id
            +")' value='Verwijder'></td></tr>";

        }
        // tabelelem.innerHTML = "";
        // tabelelem.innerHTML += "<tr><th>naam</th><th>prijs</th><th>omschrijving</th></tr>";
        // for( var i = 0 ; i < arrayMetProducten.length ; i++  ){
        //     tabelelem.innerHTML += " <tr><td>"+ arrayMetProducten[i].naam +"</td><td>"+ arrayMetBestelling[i].prijs +"</td><td>"+ arrayMetBestelling[i].omschrijving +"</td></tr>";
        // }
}
}
vanali.open("GET","https://localhost:44344/api/Product/alleProducten",true);
vanali.send();
}


function verwijderProduct(id)
{
    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function(){
        if(this.readyState == 4)
        {
            toonAlleProducten();
            alert("Product is verwijderd");
            
        }
    }
    vanali.open("DELETE","https://localhost:44344/api/Product/verwijderProduct/" + id,true);
    vanali.send();
}

// -----------------------------CARD MAKER-------------------------------------------------------------------------
    const userBoxName = document.getElementById("user-box-name");
    const brandInput = document.getElementById("brand-input");
    const userBoxPrice = document.getElementById("user-box-price");
    const priceInput = document.getElementById("actual-price");
    const userBoxSpecs = document.getElementById("user-box-specs");
    const specsInput = document.getElementById("specs-input");
    const userBoxDiscount = document.getElementById("user-box-discount");
    const discountInput = document.getElementById("discount-input");
    const uiteindelijkePrijs = document.getElementById("price-input");
    const fotolayout = document.getElementById("user-box-foto");
    const fotopreview = document.getElementById("foto-placeholder");
    // const userBoxNewPrice = document.getElementById("user-box-newprice");
    // const newPriceInput = document.getElementById("newprice-input");

    function reWrite(text1, text2){
        text1.addEventListener('input', (event) => {
            text2.textContent = event.target.value;
            console.log(event.target.id);
            if(event.target.id == 'user-box-price' || event.target.id == 'user-box-discount'){
                uiteindelijkePrijs.innerHTML = "€"+calcDiscount(userBoxPrice.value, userBoxDiscount.value);
            }
            if(event.target.id == 'user-box-foto'){
                console.log("ja bij foto");
                fotopreview.src = "img/"+fotolayout.value;
            }
            if(event.target.id == "user-box-discount"){
                discountInput.innerHTML = event.target.value + " %";
            }
            if(event.target.id == "user-box-price" ){
                priceInput.innerHTML = "€"+event.target.value;
            }

        })
    };

    function calcDiscount(num1, num2){
        var nieuweprijs = num1 - (num2 / 100) * num1
        nieuweprijs = nieuweprijs.toFixed(2);
        return nieuweprijs;
    }

    reWrite(userBoxName, brandInput);
    reWrite(userBoxPrice, priceInput);
    reWrite(userBoxSpecs, specsInput);
    reWrite(userBoxDiscount, discountInput);
    reWrite(fotolayout, fotopreview);
