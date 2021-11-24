const productImages = document.querySelectorAll(".product-images img");
const productImagesSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImagesSlide.style.backgroundImage = `url('${item.src}')`
        activeImageSlide = i;

    })
})

//toggle size

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () =>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})

// Product input--------------------------------------------------------




//description

function goToDesc(){
    document.getElementById("product-desc").scrollIntoView({behavior: "smooth", block: "center"});
    console.log("hello world")
}


function voegtoeaanbestelling() {
    var productid = document.getElementById("geheimkastje").value;
    console.log("voeg toe aan bestelling");
    console.log(">>" + productid);
    window.location = "bestelling.html?productid=" + productid;

    /**
    * 1.get id from url
    * 2.get current cart from the localstorage//
    * 3.voeg huidige product toe aan lijst
    * 4.sla de nieuwe lijst op in local storage
    * 
    */
    const currentCart = window.localStorage.getItem("cart");
    const cartObject = currentCart ? JSON.parse(currentCart) : {};
    const product = cartObject[productid];
    if (product) cartObject[productid] = +product + 1;
    else cartObject[productid] = 1;

    window.localStorage.setItem("cart", JSON.stringify(cartObject));
    console.log(cartObject)
}