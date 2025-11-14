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
    displayRestaurants();
}

// Go back to home page
function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('restaurantPage').style.display = 'none';
}

// Display restaurants in grid
function displayRestaurants() {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = ''; // Clear existing content

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
    document.getElementById('restaurantDetailsPage').style.display = 'block';
    
    const restaurant = restaurants.find(r => r.id === restaurantId);
    document.getElementById('restaurantDetailsTitle').textContent = restaurant.name;
    document.getElementById('menuSearchInput').value = '';
    
    displayMenuItems(restaurantId);
}

// Go back to restaurants page
function goBackToRestaurants() {
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('restaurantPage').style.display = 'block';
}

// Display menu items for a restaurant
function displayMenuItems(restaurantId) {
    const container = document.getElementById('menuContainer');
    container.innerHTML = ''; // Clear existing content
    
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

// Add to cart (placeholder function)
function addToCart(itemName, price, image) {
    const cartItem = {
        id: Date.now(),
        name: itemName,
        price: price,
        image: image,
        quantity: 1
    };
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    // Update cart count in header
    updateCartCount();
    
    // Save cart to localStorage
    saveCart();
    
    // Navigate to cart page automatically
    showCart();
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

// Update cart count in header
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Show cart from header button
function showCartFromMenu() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items first.');
        return;
    }
    document.getElementById('restaurantDetailsPage').style.display = 'none';
    document.getElementById('restaurantPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'block';
    displayCart();
}

// Update cart summary
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
    
    alert(`Order placed successfully! Total: ₹${total}\n\nThank you for your purchase!`);
    cart = [];
    updateCartCount();
    saveCart();
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('cartPage').style.display = 'none';
}

// Search functionality for restaurants
function searchRestaurants() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('restaurantContainer');
    
    // If search input is empty, show all restaurants
    if (searchInput === '') {
        displayRestaurants();
        return;
    }
    
    // Filter restaurants based on search input
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchInput)
    );
    
    // Display filtered restaurants
    container.innerHTML = '';
    
    if (filteredRestaurants.length === 0) {
        container.innerHTML = '<div class="no-results"><p>No restaurants found matching your search</p></div>';
        return;
    }
    
    filteredRestaurants.forEach(restaurant => {
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

// Search functionality for menu items
function searchMenuItems() {
    const searchInput = document.getElementById('menuSearchInput').value.toLowerCase();
    const container = document.getElementById('menuContainer');
    
    // If search input is empty, show all items
    if (searchInput === '') {
        displayMenuItems(currentRestaurantId);
        return;
    }
    
    // Filter menu items based on search input
    const items = menuItems[currentRestaurantId];
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchInput)
    );
    
    // Display filtered items
    container.innerHTML = '';
    
    if (filteredItems.length === 0) {
        container.innerHTML = '<div class="no-results"><p>No items found matching your search</p></div>';
        return;
    }
    
    filteredItems.forEach(item => {
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
