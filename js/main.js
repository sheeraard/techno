const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active'); 
})
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active'); 
})

// Ambil elemen-elemen yang diperlukan
const toggleCartBtn = document.querySelector('.toggle-cart');
const cartContent = document.querySelector('.cart-content');

// Tambahkan event listener untuk tombol toggle
toggleCartBtn.addEventListener('click', function () {
    cartContent.classList.toggle('active'); // Tambahkan atau hilangkan kelas 'show'
});

document.addEventListener('click', function (event) {
    if (!cartContent.contains(event.target) && !toggleCartBtn.contains(event.target)) {
        cartContent.classList.remove('active');
    }
});

// Array to store the products in the cart
const products = [];

// Function to add a product to the cart
function addToCart(product) {
    products.push(product);
    displayCart();
}

// Function to display products in the cart
function displayCart() {
    cartContent.innerHTML = '<h2>Shopping Cart</h2>';

    // Fetch and display each product in the cart
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('cart-item');
        productItem.innerHTML = `
            <span>${product.name}</span>
            <span>$${product.price.toFixed(2)}</span>
        `;
        cartContent.appendChild(productItem);
    });

    // Calculate and display the total price
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    cartContent.appendChild(totalElement);
}

// Event listener for adding a product to the cart
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-dark') && event.target.textContent === 'Add to Cart') {
        // Assuming the product details are nearby in the HTML structure
        const productCard = event.target.closest('.card');
        const productName = productCard.querySelector('.card-title').textContent;
        const productPrice = parseFloat(productCard.querySelector('.text-danger').textContent.slice(1));

        const selectedProduct = { name: productName, price: productPrice };
        addToCart(selectedProduct);
    }
});

// Close the cart when clicking outside of it
document.addEventListener('click', function (event) {
    if (!cartContent.contains(event.target) && !toggleCartBtn.contains(event.target)) {
        cartContent.classList.remove('active');
    }
});
