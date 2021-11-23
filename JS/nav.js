const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<div class="nav">
    <img src="/img/CH AP.png" alt="" class="brand-logo" onclick="home()">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search Here">
            <button class="search-btn">Search</button>
        </div>
        <a href="#"><img src="/img/user.png" alt=""></a>
        <a href="#"><img src="/img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link" onclick="home()">home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link" onclick="cardmaker()">cardmaker</a></li>
    <li class="link-item"><a href="#" class="link">accesoirres</a></li>

    <!-- https://www.youtube.com/watch?v=0-NF3JMs4E8&ab_channel=ModernWeb
    minuut 13:36 -->


</ul>`;
}

createNav();

function home() {

    window.location = 'http://127.0.0.1:5500/index.html';

}

function cardmaker(){
    window.location = 'http://127.0.0.1:5500/beheerproduct.html'
}