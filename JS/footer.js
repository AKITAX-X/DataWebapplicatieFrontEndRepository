const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="/img/CH AP.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about Company</p>
        <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus sapien, placerat id lacinia sit amet,
             luctus nec velit. In in eros ipsum. Donec est ligula, lacinia non rutrum volutpat, tristique tincidunt arcu. 
             Pellentesque eleifend nibh et velit placerat, ut posuere ligula malesuada. Nunc mattis ante eros, eu suscipit 
             purus ultricies rutrum. Pellentesque cursus, augue in bibendum eleifend, quam lacus tincidunt ante, et dictum 
             tortor velit non sapien. Nullam ac erat massa. Nullam placerat mauris id mollis sollicitudin. Praesent porta 
             egestas felis vestibulum sollicitudin. Curabitur blandit neque elit, eu porttitor dolor condimentum et. 
             Curabitur quis tincidunt dolor. Suspendisse facilisis ultricies libero. Donec sit amet mauris vitae nisi 
             finibus auctor eget nec sapien. Pellentesque ligula elit, viverra ut porttitor efficitur, malesuada quis risus.
             Sed convallis urna ac rhoncus condimentum. Aliquam quis leo pulvinar turpis bibendum molestie.</p>
             <p class="info">support emails - help@cheaps.com,
                 customersupport@cheaps.com</p>
            <p class="info"> telephone - 00000000</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">Privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Cheaps, Best products with a cheap price</p>

    `;
}

createFooter();