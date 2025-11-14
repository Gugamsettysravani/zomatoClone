// Mock data for restaurants and menu items
// This file contains all the mock data for the Zomato clone application

// Restaurant data
const restaurants = [
    {
        id: 1,
        name: "Spicy Bites",
        image: "https://img.freepik.com/free-photo/top-view-chips-with-chilli-bowl-black-stone-horizontal_176474-1218.jpg?semt=ais_hybrid&w=740&q=80",
        rating: 4.5,
        reviews: 245
    },
    {
        id: 2,
        name: "Burger Paradise",
        image: "https://b.zmtcdn.com/data/pictures/8/19071488/a33ac2828c59751a08f457ce1659e4c8.jpeg?fit=around|750:500&crop=750:500;*,*",
        rating: 4.2,
        reviews: 189
    },
    {
        id: 3,
        name: "Pizza Palace",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt69VdP5o8YBDMPIgyU48n9gLnndfcpwe62g&s",
        rating: 4.8,
        reviews: 512
    },
    {
        id: 4,
        name: "Sushi Dreams",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVC46PGBg4EzV3WLORyBkLS0M6N5rl-QchGw&s",
        rating: 4.7,
        reviews: 367
    },
    {
        id: 5,
        name: "Biryani House",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/nlzienbcuhw25urg927h",
        rating: 4.6,
        reviews: 298
    },
    {
        id: 6,
        name: "Taco Fiesta",
        image: "https://i1.wp.com/www.foodover50.com/wp-content/uploads/2019/11/beef_fajita_tacos.jpg?fit=1250%2C833&ssl=1",
        rating: 4.3,
        reviews: 156
    },
    {
        id: 7,
        name: "Pasta Paradise",
        image: "https://b.zmtcdn.com/data/pictures/5/19308845/9b1713ef36abe98e9a9f3de5247fa02d.jpg",
        rating: 4.4,
        reviews: 221
    },
    {
        id: 8,
        name: "Fried Chicken Co",
        image: "https://rs-menus-api.roocdn.com/images/fec00ea5-2fea-4947-900b-8e48f21e742c/image.jpeg?width=1200&height=630&fit=crop",
        rating: 4.1,
        reviews: 134
    },
    {
        id: 9,
        name: "KFC",
        image: "https://b.zmtcdn.com/data/pictures/7/18931627/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg?output-format=webp",
        rating: 4.4,
        reviews: 221
    },
    {
        id: 10,
        name: "Domino's Pizza",
        image: "https://b.zmtcdn.com/data/pictures/9/18931579/99d44cef2ee253be0f44255516b4ce74_o2_featured_v2.jpg",
        rating: 4.1,
        reviews: 134
    }
];

// Menu items for each restaurant (10 items per restaurant)
const menuItems = {
    1: [ // Spicy Bites
        { id: 1, name: "Chili Chicken", image: "https://img.freepik.com/free-photo/fried-chicken-with-chili-pepper_141793-3280.jpg", price: 250, rating: 4.6 },
        { id: 2, name: "Spicy Paneer", image: "https://img.freepik.com/free-photo/spicy-paneer-tikka_141793-2896.jpg", price: 200, rating: 4.4 },
        { id: 3, name: "Tandoori Chicken", image: "https://img.freepik.com/free-photo/tandoori-chicken-with-spices_141793-2891.jpg", price: 280, rating: 4.7 },
        { id: 4, name: "Samosa", image: "https://img.freepik.com/free-photo/samosa-with-sauce_141793-2912.jpg", price: 80, rating: 4.3 },
        { id: 5, name: "Mirchi Bhaji", image: "https://img.freepik.com/free-photo/mirchi-bhaji_141793-2920.jpg", price: 120, rating: 4.5 },
        { id: 6, name: "Spicy Momo", image: "https://img.freepik.com/free-photo/spicy-momo_141793-2935.jpg", price: 150, rating: 4.4 },
        { id: 7, name: "Chaat", image: "https://img.freepik.com/free-photo/indian-chaat_141793-2940.jpg", price: 100, rating: 4.2 },
        { id: 8, name: "Spicy Biryani", image: "https://img.freepik.com/free-photo/biryani_141793-2950.jpg", price: 320, rating: 4.8 },
        { id: 9, name: "Chicken Tikka", image: "https://img.freepik.com/free-photo/chicken-tikka_141793-2955.jpg", price: 220, rating: 4.6 },
        { id: 10, name: "Spicy Curries", image: "https://img.freepik.com/free-photo/spicy-curry_141793-2960.jpg", price: 280, rating: 4.5 }
    ],
    2: [ // Burger Paradise
        { id: 1, name: "Cheese Burger", image: "https://img.freepik.com/free-photo/cheese-burger_141793-3010.jpg", price: 200, rating: 4.5 },
        { id: 2, name: "Bacon Burger", image: "https://img.freepik.com/free-photo/bacon-burger_141793-3015.jpg", price: 250, rating: 4.6 },
        { id: 3, name: "Double Patty", image: "https://img.freepik.com/free-photo/double-patty-burger_141793-3020.jpg", price: 300, rating: 4.7 },
        { id: 4, name: "Veggie Burger", image: "https://img.freepik.com/free-photo/veggie-burger_141793-3025.jpg", price: 180, rating: 4.3 },
        { id: 5, name: "Chicken Burger", image: "https://img.freepik.com/free-photo/chicken-burger_141793-3030.jpg", price: 220, rating: 4.4 },
        { id: 6, name: "Spicy Burger", image: "https://img.freepik.com/free-photo/spicy-burger_141793-3035.jpg", price: 240, rating: 4.5 },
        { id: 7, name: "Mushroom Burger", image: "https://img.freepik.com/free-photo/mushroom-burger_141793-3040.jpg", price: 210, rating: 4.2 },
        { id: 8, name: "Loaded Burger", image: "https://img.freepik.com/free-photo/loaded-burger_141793-3045.jpg", price: 320, rating: 4.8 },
        { id: 9, name: "BBQ Burger", image: "https://img.freepik.com/free-photo/bbq-burger_141793-3050.jpg", price: 270, rating: 4.6 },
        { id: 10, name: "Mega Burger", image: "https://img.freepik.com/free-photo/mega-burger_141793-3055.jpg", price: 350, rating: 4.7 }
    ],
    3: [ // Pizza Palace
        { id: 1, name: "Margherita Pizza", image: "https://img.freepik.com/free-photo/margherita-pizza_141793-3100.jpg", price: 250, rating: 4.6 },
        { id: 2, name: "Pepperoni Pizza", image: "https://img.freepik.com/free-photo/pepperoni-pizza_141793-3105.jpg", price: 280, rating: 4.7 },
        { id: 3, name: "Veggie Pizza", image: "https://img.freepik.com/free-photo/veggie-pizza_141793-3110.jpg", price: 240, rating: 4.4 },
        { id: 4, name: "BBQ Chicken Pizza", image: "https://img.freepik.com/free-photo/bbq-chicken-pizza_141793-3115.jpg", price: 300, rating: 4.8 },
        { id: 5, name: "Cheese Burst", image: "https://img.freepik.com/free-photo/cheese-burst-pizza_141793-3120.jpg", price: 320, rating: 4.9 },
        { id: 6, name: "Paneer Pizza", image: "https://img.freepik.com/free-photo/paneer-pizza_141793-3125.jpg", price: 270, rating: 4.5 },
        { id: 7, name: "Tandoori Pizza", image: "https://img.freepik.com/free-photo/tandoori-pizza_141793-3130.jpg", price: 290, rating: 4.6 },
        { id: 8, name: "Meat Lovers", image: "https://img.freepik.com/free-photo/meat-lovers-pizza_141793-3135.jpg", price: 350, rating: 4.8 },
        { id: 9, name: "Supreme Pizza", image: "https://img.freepik.com/free-photo/supreme-pizza_141793-3140.jpg", price: 330, rating: 4.7 },
        { id: 10, name: "Spicy Pizza", image: "https://img.freepik.com/free-photo/spicy-pizza_141793-3145.jpg", price: 310, rating: 4.6 }
    ],
    4: [ // Sushi Dreams
        { id: 1, name: "California Roll", image: "https://img.freepik.com/free-photo/california-roll_141793-3200.jpg", price: 350, rating: 4.7 },
        { id: 2, name: "Dragon Roll", image: "https://img.freepik.com/free-photo/dragon-roll_141793-3205.jpg", price: 400, rating: 4.8 },
        { id: 3, name: "Salmon Nigiri", image: "https://img.freepik.com/free-photo/salmon-nigiri_141793-3210.jpg", price: 380, rating: 4.6 },
        { id: 4, name: "Spicy Tuna", image: "https://img.freepik.com/free-photo/spicy-tuna_141793-3215.jpg", price: 370, rating: 4.5 },
        { id: 5, name: "Vegetable Roll", image: "https://img.freepik.com/free-photo/vegetable-roll_141793-3220.jpg", price: 300, rating: 4.4 },
        { id: 6, name: "Tempura Roll", image: "https://img.freepik.com/free-photo/tempura-roll_141793-3225.jpg", price: 420, rating: 4.7 },
        { id: 7, name: "Eel Roll", image: "https://img.freepik.com/free-photo/eel-roll_141793-3230.jpg", price: 390, rating: 4.6 },
        { id: 8, name: "Philadelphia Roll", image: "https://img.freepik.com/free-photo/philadelphia-roll_141793-3235.jpg", price: 410, rating: 4.8 },
        { id: 9, name: "Shrimp Tempura", image: "https://img.freepik.com/free-photo/shrimp-tempura_141793-3240.jpg", price: 430, rating: 4.7 },
        { id: 10, name: "Rainbow Roll", image: "https://img.freepik.com/free-photo/rainbow-roll_141793-3245.jpg", price: 450, rating: 4.9 }
    ],
    5: [ // Biryani House
        { id: 1, name: "Chicken Biryani", image: "https://img.freepik.com/free-photo/chicken-biryani_141793-3300.jpg", price: 280, rating: 4.7 },
        { id: 2, name: "Mutton Biryani", image: "https://img.freepik.com/free-photo/mutton-biryani_141793-3305.jpg", price: 320, rating: 4.8 },
        { id: 3, name: "Fish Biryani", image: "https://img.freepik.com/free-photo/fish-biryani_141793-3310.jpg", price: 300, rating: 4.6 },
        { id: 4, name: "Vegetable Biryani", image: "https://img.freepik.com/free-photo/vegetable-biryani_141793-3315.jpg", price: 220, rating: 4.4 },
        { id: 5, name: "Egg Biryani", image: "https://img.freepik.com/free-photo/egg-biryani_141793-3320.jpg", price: 240, rating: 4.5 },
        { id: 6, name: "Prawn Biryani", image: "https://img.freepik.com/free-photo/prawn-biryani_141793-3325.jpg", price: 340, rating: 4.7 },
        { id: 7, name: "Mixed Biryani", image: "https://img.freepik.com/free-photo/mixed-biryani_141793-3330.jpg", price: 350, rating: 4.8 },
        { id: 8, name: "Hyderabadi Biryani", image: "https://img.freepik.com/free-photo/hyderabadi-biryani_141793-3335.jpg", price: 290, rating: 4.6 },
        { id: 9, name: "Lucknowi Biryani", image: "https://img.freepik.com/free-photo/lucknowi-biryani_141793-3340.jpg", price: 310, rating: 4.7 },
        { id: 10, name: "Kolkata Biryani", image: "https://img.freepik.com/free-photo/kolkata-biryani_141793-3345.jpg", price: 270, rating: 4.5 }
    ],
    6: [ // Taco Fiesta
        { id: 1, name: "Beef Tacos", image: "https://img.freepik.com/free-photo/beef-tacos_141793-3400.jpg", price: 200, rating: 4.5 },
        { id: 2, name: "Chicken Tacos", image: "https://img.freepik.com/free-photo/chicken-tacos_141793-3405.jpg", price: 190, rating: 4.4 },
        { id: 3, name: "Fish Tacos", image: "https://img.freepik.com/free-photo/fish-tacos_141793-3410.jpg", price: 220, rating: 4.6 },
        { id: 4, name: "Vegetable Tacos", image: "https://img.freepik.com/free-photo/vegetable-tacos_141793-3415.jpg", price: 170, rating: 4.3 },
        { id: 5, name: "Shrimp Tacos", image: "https://img.freepik.com/free-photo/shrimp-tacos_141793-3420.jpg", price: 240, rating: 4.7 },
        { id: 6, name: "Al Pastor Tacos", image: "https://img.freepik.com/free-photo/al-pastor-tacos_141793-3425.jpg", price: 210, rating: 4.5 },
        { id: 7, name: "Carnitas Tacos", image: "https://img.freepik.com/free-photo/carnitas-tacos_141793-3430.jpg", price: 230, rating: 4.6 },
        { id: 8, name: "Carne Asada", image: "https://img.freepik.com/free-photo/carne-asada_141793-3435.jpg", price: 250, rating: 4.7 },
        { id: 9, name: "Chorizo Tacos", image: "https://img.freepik.com/free-photo/chorizo-tacos_141793-3440.jpg", price: 220, rating: 4.5 },
        { id: 10, name: "Breakfast Tacos", image: "https://img.freepik.com/free-photo/breakfast-tacos_141793-3445.jpg", price: 180, rating: 4.4 }
    ],
    7: [ // Pasta Paradise
        { id: 1, name: "Spaghetti Carbonara", image: "https://img.freepik.com/free-photo/spaghetti-carbonara_141793-3500.jpg", price: 280, rating: 4.7 },
        { id: 2, name: "Fettuccine Alfredo", image: "https://img.freepik.com/free-photo/fettuccine-alfredo_141793-3505.jpg", price: 270, rating: 4.6 },
        { id: 3, name: "Penne Arrabbiata", image: "https://img.freepik.com/free-photo/penne-arrabbiata_141793-3510.jpg", price: 240, rating: 4.5 },
        { id: 4, name: "Lasagna", image: "https://img.freepik.com/free-photo/lasagna_141793-3515.jpg", price: 300, rating: 4.8 },
        { id: 5, name: "Ravioli Ricotta", image: "https://img.freepik.com/free-photo/ravioli-ricotta_141793-3520.jpg", price: 260, rating: 4.6 },
        { id: 6, name: "Linguine Pesto", image: "https://img.freepik.com/free-photo/linguine-pesto_141793-3525.jpg", price: 250, rating: 4.5 },
        { id: 7, name: "Bolognese", image: "https://img.freepik.com/free-photo/bolognese_141793-3530.jpg", price: 290, rating: 4.7 },
        { id: 8, name: "Seafood Pasta", image: "https://img.freepik.com/free-photo/seafood-pasta_141793-3535.jpg", price: 340, rating: 4.8 },
        { id: 9, name: "Tortellini", image: "https://img.freepik.com/free-photo/tortellini_141793-3540.jpg", price: 270, rating: 4.6 },
        { id: 10, name: "Mac and Cheese", image: "https://img.freepik.com/free-photo/mac-cheese_141793-3545.jpg", price: 220, rating: 4.4 }
    ],
    8: [ // Fried Chicken Co
        { id: 1, name: "Crispy Chicken", image: "https://img.freepik.com/free-photo/crispy-chicken_141793-3600.jpg", price: 220, rating: 4.6 },
        { id: 2, name: "Spicy Wings", image: "https://img.freepik.com/free-photo/spicy-wings_141793-3605.jpg", price: 200, rating: 4.5 },
        { id: 3, name: "Drumsticks", image: "https://img.freepik.com/free-photo/drumsticks_141793-3610.jpg", price: 180, rating: 4.4 },
        { id: 4, name: "Chicken Tenders", image: "https://img.freepik.com/free-photo/chicken-tenders_141793-3615.jpg", price: 210, rating: 4.5 },
        { id: 5, name: "Hot and Spicy", image: "https://img.freepik.com/free-photo/hot-spicy_141793-3620.jpg", price: 240, rating: 4.7 },
        { id: 6, name: "Garlic Chicken", image: "https://img.freepik.com/free-photo/garlic-chicken_141793-3625.jpg", price: 230, rating: 4.6 },
        { id: 7, name: "Honey Glazed", image: "https://img.freepik.com/free-photo/honey-glazed_141793-3630.jpg", price: 250, rating: 4.6 },
        { id: 8, name: "Teriyaki Chicken", image: "https://img.freepik.com/free-photo/teriyaki-chicken_141793-3635.jpg", price: 260, rating: 4.7 },
        { id: 9, name: "Grilled Chicken", image: "https://img.freepik.com/free-photo/grilled-chicken_141793-3640.jpg", price: 240, rating: 4.5 },
        { id: 10, name: "Buffalo Wings", image: "https://img.freepik.com/free-photo/buffalo-wings_141793-3645.jpg", price: 220, rating: 4.6 }
    ],
    9: [ // KFC
        { id: 1, name: "Original Chicken", image: "https://img.freepik.com/free-photo/original-chicken_141793-3700.jpg", price: 230, rating: 4.6 },
        { id: 2, name: "Extra Crispy", image: "https://img.freepik.com/free-photo/extra-crispy_141793-3705.jpg", price: 250, rating: 4.7 },
        { id: 3, name: "Boneless Chicken", image: "https://img.freepik.com/free-photo/boneless-chicken_141793-3710.jpg", price: 240, rating: 4.5 },
        { id: 4, name: "Spicy Chicken", image: "https://img.freepik.com/free-photo/spicy-chicken_141793-3715.jpg", price: 260, rating: 4.7 },
        { id: 5, name: "Wings Bucket", image: "https://img.freepik.com/free-photo/wings-bucket_141793-3720.jpg", price: 280, rating: 4.6 },
        { id: 6, name: "Tender Strips", image: "https://img.freepik.com/free-photo/tender-strips_141793-3725.jpg", price: 220, rating: 4.5 },
        { id: 7, name: "Hot Zinger", image: "https://img.freepik.com/free-photo/hot-zinger_141793-3730.jpg", price: 210, rating: 4.4 },
        { id: 8, name: "Crispy Popcorn", image: "https://img.freepik.com/free-photo/crispy-popcorn_141793-3735.jpg", price: 190, rating: 4.4 },
        { id: 9, name: "Famous Bowl", image: "https://img.freepik.com/free-photo/famous-bowl_141793-3740.jpg", price: 270, rating: 4.7 },
        { id: 10, name: "Chicken Box Meal", image: "https://img.freepik.com/free-photo/chicken-box-meal_141793-3745.jpg", price: 350, rating: 4.8 }
    ],
    10: [ // Domino's Pizza
        { id: 1, name: "ExtravaganZZa", image: "https://img.freepik.com/free-photo/extravaganzza_141793-3800.jpg", price: 500, rating: 4.8 },
        { id: 2, name: "MeatZZa", image: "https://img.freepik.com/free-photo/meatZZa_141793-3805.jpg", price: 480, rating: 4.7 },
        { id: 3, name: "VegZZa", image: "https://img.freepik.com/free-photo/vegZZa_141793-3810.jpg", price: 350, rating: 4.5 },
        { id: 4, name: "CheeZZy Crust", image: "https://img.freepik.com/free-photo/cheezzy-crust_141793-3815.jpg", price: 420, rating: 4.6 },
        { id: 5, name: "Peppy Paneer", image: "https://img.freepik.com/free-photo/peppy-paneer_141793-3820.jpg", price: 380, rating: 4.5 },
        { id: 6, name: "Indi Tandoori", image: "https://img.freepik.com/free-photo/indi-tandoori_141793-3825.jpg", price: 400, rating: 4.6 },
        { id: 7, name: "Buffalo Chicken", image: "https://img.freepik.com/free-photo/buffalo-chicken_141793-3830.jpg", price: 440, rating: 4.7 },
        { id: 8, name: "Pacific Veggie", image: "https://img.freepik.com/free-photo/pacific-veggie_141793-3835.jpg", price: 360, rating: 4.4 },
        { id: 9, name: "Wisconsin 6 Cheese", image: "https://img.freepik.com/free-photo/wisconsin-6-cheese_141793-3840.jpg", price: 460, rating: 4.8 },
        { id: 10, name: "Honolulu Hawaiian", image: "https://img.freepik.com/free-photo/honolulu-hawaiian_141793-3845.jpg", price: 420, rating: 4.5 }
    ]
};
