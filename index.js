var swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
});

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('.cart-total');
const cartValue = document.querySelector('.cart-value');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');

cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartTab.classList.add('cart-tab-active');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartTab.classList.remove('cart-tab-active');
});

hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobile-menu-active');
});

hamburger.addEventListener('click', ()=>{
    bars.classList.toggle('fa-xmark');
});



let productList = [];
let cartProduct = [];

const updateTotals = () => {
    let totalPrice = 0;
    let totalQuantity = 0;

    document.querySelectorAll('.item').forEach(item => {

        const quantity = parseInt(item.querySelector('.quantity-value').textContent);
        totalQuantity += quantity;
        const priceElement = item.querySelector('.item-total');
        if (priceElement) {
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            totalPrice += price;
        }
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    cartValue.textContent = totalQuantity;
};

const showCards = () => {
    productList.forEach(product => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
        <div class="card-image">
            <img src="${product.image}" />
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a href="#" class="btn card-btn">Add to Cart</a>
        `;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('.card-btn');

        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(product);
        });
    });
};

const addToCart = (product) => {
    let quantity = 1;
    let price = parseFloat(product.price.replace('$', ''));

    const existingProduct = cartProduct.find(item => item.id === product.id);
    if (existingProduct) {
        alert('Item already in your cart!');
        return;
    }

    cartProduct.push(product);

    const cartItem = document.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML = `
    <div class="item-image">
        <img src="${product.image}" />
    </div>
    <div>
        <h4>${product.name}</h4>
        <h4 class="item-total">${product.price}</h4>
    </div>
    <div class="flex">
        <a href="#" class="quantity-btn minus">
            <i class="fa-solid fa-minus"></i>
        </a>
        <h4 class="quantity-value">${quantity}</h4>
        <a href="#" class="quantity-btn plus">
            <i class="fa-solid fa-plus"></i>
        </a>
    </div>
    `; 

    cartList.appendChild(cartItem);
    updateTotals();

    const plusBtn = cartItem.querySelector('.plus');
    const quantityValue = cartItem.querySelector('.quantity-value');
    const itemTotal = cartItem.querySelector('.item-total');

    plusBtn.addEventListener('click', (event) => {
        event.preventDefault();

        quantity++;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
        
        // Recalculate cart total on quantity increase
        updateTotals();
    });

    const minusBtn = cartItem.querySelector('.minus');

    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
            itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
            
            // Recalculate cart total on quantity decrease
            updateTotals();
        } else {
            cartItem.classList.add('slide-out');

            setTimeout(() => {
                cartItem.remove();
                cartProduct = cartProduct.filter(item => item.id !== product.id);
                
                //Recalculate cart total after element removal finishes
                updateTotals();
            }, 300);
        }
    });
};

const initApp = () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            productList = data;
            showCards();
        });
};

initApp();