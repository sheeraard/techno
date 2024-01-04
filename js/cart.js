const toggleCartBtn = document.querySelector('.toggle-cart');
const cartContent = document.querySelector('.cart-content');
const shoppingCart = document.querySelector('.shopping-cart'); // Replace this with the correct element

toggleCartBtn.addEventListener('click', function () {
    cartContent.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!cartContent.contains(e.target) && !shoppingCart.contains(e.target)) {
        cartContent.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.querySelector('.toggle-cart');
    const cartContent = document.querySelector('.cart-content');

    // Dummy product data for testing
    const products = [
        { id: 1, name: 'Steam Wallet', price: 19.99 },
        { id: 2, name: 'Steam Wallet', price: 29.99 },
        { id: 3, name: 'Steam Wallet', price: 49.99 },
        { id: 4, name: 'Steam Wallet', price: 99.99 },
        { id: 5, name: 'Steam Wallet', price: 199.99 },
        { id: 6, name: 'Steam Wallet', price: 299.99 },
        { id: 7, name: 'Steam Wallet', price: 399.99 },
        { id: 8, name: 'Steam Wallet', price: 499.99 },
        // Add more products as needed
    ];

    // Event listener for the cart button
    cartButton.addEventListener('click', toggleCart);

    // Event listener for adding a product to the cart
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.dataset.productId);
            const selectedProduct = products.find(product => product.id === productId);
            if (selectedProduct) {
                addToCart(selectedProduct);
                displaySingleProduct(selectedProduct);
            }
        }
    });

    // Function to toggle the cart visibility
    function toggleCart() {
        cartContent.classList.toggle('show-cart');
    }

    // Function to add a product to the cart
    function addToCart(product) {
        products.push(product);
        // displayCart();  // Do not call displayCart here
    }

    // Function to display a single product in the cart
    function displaySingleProduct(product) {
        const productItem = document.createElement('div');
        productItem.classList.add('cart-item');
        productItem.innerHTML = `
            <span>${product.name}</span>
            <span>$${product.price}</span>
        `;
        cartContent.appendChild(productItem);
    }

    // Function to display products in the cart
    function displayCart() {
        cartContent.innerHTML = '<h2>Shopping Cart</h2>';

        // Fetch and display each product in the cart
        // You can customize the display format according to your needs
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('cart-item');
            productItem.innerHTML = `
                <span>${product.name}</span>
                <span>$${product.price}</span>
            `;
            cartContent.appendChild(productItem);
        });

        // Calculate and display the total price
        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-total');
        totalElement.innerHTML = `Total: $${totalPrice}`;
        cartContent.appendChild(totalElement);
    }

    // Initial display of the cart (empty)
    displayCart();
});