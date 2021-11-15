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


