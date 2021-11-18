productids = [];
        window.onload = function () {
            var bestellingproductids = [];
            // JSON.parse(localStorage.getItem("geheimesleutelvancheapswinkel"));
            const urlParams = new URLSearchParams(window.location.search);
            const productid = urlParams.get('productid');
            bestellingproductids.push(productid);
            localStorage.setItem("geheimesleutelvancheapswinkel", JSON.stringify(bestellingproductids));
            productids = bestellingproductids;
            toonbestelling();
        }
        function toonbestelling(){
            var overz = document.getElementById("overzicht");
            for(var x =0 ; x < productids.length; x++){
                overz.innerHTML += ">>"+productids[x]+"<br>";
            }
        }

    