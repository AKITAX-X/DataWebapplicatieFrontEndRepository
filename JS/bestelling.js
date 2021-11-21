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
       function toonbestelling(){
            var overz = document.getElementById("overzicht");
            overz.innerHTML = "<tr><th>YourCart</th><th>Price</th><th>Amount</th><th>DeleteButton</th></tr>";
            for(var x =0 ; x < productids.length; x++){
                overz.innerHTML += ` <tr><td>${productids[x]}<td><td>${productids[x]}<td><td>${productids[x]}<td><td>${productids[x]}<td><tr>` ;
            }
        }

        // function toonAlleProducten(){
        //     let vanali = new XMLHttpRequest();
        //     vanali.onreadystatechange = function(){
        //     if(this.readyState == 4){
        //         console.log(this.responseText);
        //         var arrayMetProducten= JSON.parse(this.responseText);
        //         var tabelelem = document.getElementById("tabelProducten");
        
        //         tabelelem.innerHTML = "<tr><th>naam</th><th>prijs</th><th>omschrijving</th><th>acties</th></tr>";
        //         for(var i = 0; i < arrayMetProducten.length; i++ )
        
        //         {
        //             tabelelem.innerHTML += "<tr><td>"+arrayMetProducten[i].naam + "</td><td>"+arrayMetProducten[i].prijs + 
        //             "</td><td>"+arrayMetProducten[i].specificaties + "</td><td> <input type='button' onclick='verwijderProduct("+ arrayMetProducten[i].id
        //             +")' value='Verwijder'></td></tr>";
        
        //         }
                



    //     <table>
    //     <tr>
    //       <th>YourCart</th>
    //       <th>Price</th>
    //       <th>Amount</th>
    //     </tr>
    //     <tr>
    //       <td>Peter</td>
    //       <td>Griffin</td>
    //       <td>$100</td>
    //     </tr>
    //     <tr>
    //       <td>Lois</td>
    //       <td>Griffin</td>
    //       <td>$150</td>
    //     </tr>
    //     <tr>
    //       <td>Joe</td>
    //       <td>Swanson</td>
    //       <td>$300</td>
    //     </tr>
    //     <tr>
    //       <td>Cleveland</td>
    //       <td>Brown</td>
    //       <td>$250</td>
    //   </tr>
    //   </table>
        
        
          

    