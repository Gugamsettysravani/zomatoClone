// Cart array to store cart items
let cart = [];

// Track current restaurant ID for menu search
let currentRestaurantId = null;

// Initialize cart from localStorage when page loads
function initializeCart() {
    const savedCart = localStorage.getItem('zomatoCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartCount();
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            cart = [];
        }
    }
}

// Save cart to localStorage
function saveCart() {
    try {
        localStorage.setItem('zomatoCart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
}

// Initialize cart on page load
window.addEventListener('DOMContentLoaded', initializeCart);

// Show restaurants page
function showRestaurants() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('restaurantPage').style.display = 'block';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    displayRestaurants();
}

// Go back to home page
function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('restaurantPage').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
}

// Handle Home link click - show restaurants page
function handleHomeClick(event) {
    event.preventDefault();
    showRestaurants();
}

// Display restaurants in grid
function displayRestaurants() {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = '';

    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.onclick = () => showRestaurantDetails(restaurant.id);
        restaurantCard.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <div class="restaurant-rating">
                    <span class="stars">★ ${restaurant.rating}</span>
                    <span class="reviews">(${restaurant.reviews} reviews)</span>
                </div>
            </div>
        `;
        container.appendChild(restaurantCard);
    });
}

// Show restaurant details page
function showRestaurantDetails(restaurantId) {
    currentRestaurantId = restaurantId;
    document.getElementById('restaurantPage').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'none';
    document.getElementById('restaurantDetailsPage').style.display = 'block';

    const restaurant = restaurants.find(r => r.id === restaurantId);
    document.getElementById('restaurantDetailsTitle').textContent = restaurant.name;

    displayMenuItems(restaurantId);
}

// Go back to restaurants page
function goBackToRestaurants() {
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('restaurantPage').style.display = 'block';
}

// Display menu items
function displayMenuItems(restaurantId) {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    const items = menuItems[restaurantId];

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-price">₹${item.price}</p>
                <div class="item-rating">
                    <span class="item-stars">★ ${item.rating}</span>
                </div>
                <button class="add-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">Add to Cart</button>
            </div>
        `;
        container.appendChild(itemCard);
    });
}

// Add to cart
function addToCart(itemName, price, image) {
    const cartItem = {
        id: Date.now(),
        name: itemName,
        price: price,
        image: image,
        quantity: 1
    };

    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }

    updateCartCount();
    saveCart();
    showAddToCartNotification(itemName);
}

// Show notification
function showAddToCartNotification(itemName) {
    const notification = document.createElement('div');
    notification.className = 'add-to-cart-notification';
    notification.textContent = `✓ ${itemName} added to cart`;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Show cart page
function showCart() {
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'block';
    displayCart();
}

// Go back to menu
function goBackToMenu() {
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('restaurantDetailsPage').style.display = 'block';
}

// Display cart items
function displayCart() {
    const container = document.getElementById('cartContainer');
    const emptyCartMsg = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');

    if (cart.length === 0) {
        container.innerHTML = '';
        emptyCartMsg.style.display = 'block';
        cartSummary.style.display = 'none';
        return;
    }

    emptyCartMsg.style.display = 'none';
    cartSummary.style.display = 'block';
    container.innerHTML = '';

    cart.forEach(item => {
        const cartItemCard = document.createElement('div');
        cartItemCard.className = 'cart-item';
        cartItemCard.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                <span class="qty">${item.quantity}</span>
                <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
            </div>
            <div class="cart-item-total">
                <p>₹${item.price * item.quantity}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        `;
        container.appendChild(cartItemCard);
    });

    updateCartSummary();
}

// Increase quantity
function increaseQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += 1;
        updateCartCount();
        saveCart();
        displayCart();
    }
}

// Decrease quantity
function decreaseQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCartCount();
        saveCart();
        displayCart();
    }
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    saveCart();
    displayCart();
}

// Cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Header cart click
function showCartFromMenu() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items first.');
        return;
    }
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('restaurantPage').style.display = 'none';
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('searchResultsPage').style.display = 'none';

    document.getElementById('cartPage').style.display = 'block';
    displayCart();
}

// Update summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;

    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('totalPrice').textContent = `₹${total}`;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 50;

    alert(`Order placed successfully! Total: ₹${total}`);
    cart = [];
    updateCartCount();
    saveCart();

    goHome();
}


function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    if (query === "") {
        showRestaurants();
        return;
    }

    
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('restaurantPage').style.display = 'none';
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';

    document.getElementById('searchResultsPage').style.display = 'block';

    const container = document.getElementById("searchResultsContainer");
    container.innerHTML = "";

    let results = [];

    restaurants.forEach(res => {
        if (
            res.name.toLowerCase().includes(query) 
        ) {
            results.push({
                type: "restaurant",
                id: res.id,
                name: res.name,
                image: res.image,
                rating: res.rating
            });
        }
    });

    
    restaurants.forEach(res => {
        const items = menuItems[res.id];
        items.forEach(item => {
            if (
                item.name.toLowerCase().includes(query) 
                
            ) {
                results.push({
                    type: "item",
                    restaurantId: res.id,
                    name: item.name,
                    image: item.image,
                    price: item.price
                });
            }
        });
    });

    
    if (results.length === 0) {
        container.innerHTML = `
            <p class="no-search-results">No results found 😕</p>
        `;
        return;
    }

    results.forEach(result => {
        const card = document.createElement("div");
        card.classList.add("search-result-card");

        if (result.type === "restaurant") {
            card.innerHTML = `
                <div class="search-result-image">
                    <img src="${result.image}" alt="${result.name}">
                </div>
                <div class="search-result-info">
                    <h3 class="search-result-name">${result.name}</h3>
                    <p class="search-result-category">Restaurant</p>
                    <span class="search-result-rating">⭐ ${result.rating}</span>
                </div>
            `;
            card.onclick = () => showRestaurantDetails(result.id);

        } else {
            card.innerHTML = `
                <div class="search-result-image">
                    <img src="${result.image}" alt="${result.name}">
                </div>
                <div class="search-result-info">
                    <h3 class="search-result-name">${result.name}</h3>
                    <p class="search-result-category">₹${result.price}</p>
                    <span class="search-result-rating">Menu Item</span>
                </div>
            `;
            card.onclick = () => showRestaurantDetails(result.restaurantId);
        }

        container.appendChild(card);
    });
}

