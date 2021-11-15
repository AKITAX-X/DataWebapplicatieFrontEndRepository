const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


// loop trough each card using a for each method
productContainers.forEach((item, i) => {
    // store the card dimensions in containerdimension variable
    let containerDimensions = item.getBoundingClientRect(); /* <- this will return elements dimensions*/
    let containerWidth = containerDimensions.width; /* <- store the container width in this variable*/

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; /*scroll left by container widt.*/
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; /*scroll left by container widt.*/
    })
})


// Function to add a brand name--------------------------------------------------------------------

window.onload = function () {
    korteAlert();
}

function korteAlert() {
    let productObj = {};

    let vanali = new XMLHttpRequest();
    vanali.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);

            var arrayMetProducten1 = JSON.parse(this.responseText);
            document.getElementsByClassName("product-container")[0].innerHTML = "";

            for (let i = 0; i < arrayMetProducten1.length; i++) {

                voegProductKaartToe(arrayMetProducten1[i]);
            }


        }
    }




    vanali.open("GET", "https://localhost:44344/api/Ali/alleProducten", true);
    vanali.send();
}

function voegProductKaartToe(productObjACT) {
    var productContainer = document.getElementsByClassName("product-container");
    console.log(productContainer);
    console.log(productObjACT.fotonaam)

    var nieuweprijs = productObjACT.prijs - (productObjACT.discount / 100) * productObjACT.prijs

    nieuweprijs = nieuweprijs.toFixed(2);



    productContainer[0].innerHTML += ` 
        <div class="product-card" onclick="productPagina(${productObjACT.id})">
        <div class="product-image">
            <span class="discount-tag">${productObjACT.discount}% off</span>
            <img src="/img/${productObjACT.fotonaam}" class="product-thumb" alt="">
            <button class="card-btn">add to whishlist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand" id="brand-input">${productObjACT.naam}</h2>
            <p class="product-specs" id="specs-input">${productObjACT.specificaties}</p>
            <span class="price" id="price-input">€${nieuweprijs}</span><span class="actual-price">€${productObjACT.prijs}</span>
        </div>
    </div>  
        `;
}



function productPagina(productId) {

    window.location = 'detailsProducten.html?pi=' + productId;
}
