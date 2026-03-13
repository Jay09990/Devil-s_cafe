export const BRAND = {
    name: "Devil's Cafe",
    tagline: "The Den Never Sleeps",
    subTagline:
        "Motera's anchor establishment for burgers, " +
        "brews, and after-hours culture.",
    rating: "4.8",
    reviewCount: "146",
    address: {
        line1: "GF 8A, Sangath Central Mall",
        line2: "Behind 4D Mall, Visat Gandhinagar Highway",
        area: "Motera",
        city: "Ahmedabad",
        pin: "380005"
    },
    hours: { open: "9:00 AM", close: "2:00 AM" },
    phone: ["+91 70164 18940", "+91 72288 61002"],
    whatsapp: "917016418940",
    social: {
        instagram: "https://instagram.com/devilsdencafe"
    },
    mapsUrl: "https://maps.google.com/?q=Devil's+Cafe+Motera+Ahmedabad",
    coords: { lat: "23.1003", lng: "72.5870" }
}

export const NAV_LINKS = [
    { label: "Menu", href: "#menu" },
    { label: "Vibe", href: "#vibe" },
    { label: "Locate", href: "#locate" }
]

export const MENU_ITEMS = {
    "Burgers": [
        { name: "Devil's Cheeseburger", price: "₹189", desc: "Sinfully savoury with signature Jack Pepper Cheese Patty." },
        { name: "Chipotle Cheeseburger", price: "₹189", desc: "Juicy veggie patty with in-house cheesy chipotle sauce." },
        { name: "Paneer Supreme Burger", price: "₹169", desc: "Rich and zesty paneer patty marinated with special spices." },
        { name: "Cheese Chilli Burger", price: "₹149", desc: "Cheesy chilli patty with a fiery bold kick." },
        { name: "Smoky Veggie Burger", price: "₹99", desc: "Grilled veggie patty infused with aromatic smoke." },
        { name: "Aloo Tikki Burger", price: "₹89", desc: "Crispy in-house potato patty with tangy sauces." },
        { name: "Peri Peri Burger", price: "₹89", desc: "In-house Peri Peri potato patty for a bold kick." },
    ],
    "Sandwiches": [
        { name: "3 Tier Mexican Sandwich", price: "₹229", desc: "Flavorful Mexican-inspired stacked with three tiers." },
        { name: "Cheese Onion Club Sandwich", price: "₹229", desc: "Delectable combination of melted cheese and onions." },
        { name: "Chipotle Paneer Sandwich", price: "₹179", desc: "Grilled paneer infused with smoky chipotle flavors." },
        { name: "Smoky Paneer Sandwich", price: "₹169", desc: "BBQ paneer with a hint of smokiness." },
        { name: "Veg Cheese Sandwich", price: "₹139", desc: "Creamy blend of vegetables and cheese." },
        { name: "Cheese Chutney Sandwich", price: "₹129", desc: "Creamy cheese and tangy chutney." },
        { name: "Classic Veg Sandwich", price: "₹99", desc: "Fresh vegetables and creamy spreads." },
    ],
    "Sides & Fries": [
        { name: "Loaded Nachos", price: "₹149", desc: "Crispy tortillas with gooey cheese and zesty salsa." },
        { name: "Loaded Chipotle Fries", price: "₹149", desc: "Fries smothered in cheesy chipotle." },
        { name: "Loaded Fries", price: "₹149", desc: "Fries smothered in a medley of savory toppings." },
        { name: "Garlic Bread", price: "₹149", desc: "Classic toasted garlic goodness." },
        { name: "Devil's Pockets", price: "₹129", desc: "Crispy fried pockets of savory goodness." },
        { name: "Jalapeno Cheese Coins", price: "₹129", desc: "Golden-brown cheesy goodness with jalapeno heat." },
        { name: "Peri Peri Fries", price: "₹129", desc: "Bold and spicy Peri Peri seasoning." },
        { name: "French Fries", price: "₹99", desc: "Classic golden-brown crispy fries." },
    ],
    "Pizza (8\")": [
        { name: "4 Cheese Pizza", price: "₹249", desc: "Four-cheese melt on hand-stretched crispy crust." },
        { name: "Chipotle Cheese Pizza", price: "₹249", desc: "Bold chipotle base with heavy premium cheese." },
        { name: "Mexican Pizza", price: "₹249", desc: "Jalapeños, bell peppers, house salsa." },
        { name: "Tomato / Onion Pizza", price: "₹249", desc: "Classic fresh toppings with mozzarella." },
    ],
    "Maggi & Pasta": [
        { name: "Cheese Tadka Maggi", price: "₹149", desc: "Classic Maggi with a cheesy tadka twist." },
        { name: "Cheese Tadka Pasta", price: "₹149", desc: "Creamy pasta with indulgent cheese tadka." },
        { name: "Veg Butter Tadka Maggi", price: "₹129", desc: "Buttery vegetable tadka Maggi." },
        { name: "Veg Butter Tadka Pasta", price: "₹129", desc: "Savory veggie butter tadka pasta." },
    ],
    "Coffee & Tea": [
        { name: "Hazelnut Cold Coffee", price: "₹189", desc: "Artisanal roast with hazelnut infusion." },
        { name: "Vietnamese Iced Coffee", price: "₹189", desc: "Rich coffee with sweetened condensed milk." },
        { name: "Irish Cold Coffee", price: "₹189", desc: "Fresh brew with a hint of Irish whiskey flavor." },
        { name: "Hot Chocolate", price: "₹159", desc: "Comforting and creamy premium chocolate." },
        { name: "Cafe Mocha", price: "₹149", desc: "Rich blend of coffee and sweet chocolate." },
        { name: "Cappuccino", price: "₹139", desc: "Luxurious frothy espresso with steamed milk." },
        { name: "Coffee Mojito", price: "₹139", desc: "Refreshing twist on a classic mojito." },
        { name: "Americano", price: "₹99", desc: "Comforting and rich pure coffee." },
        { name: "Cranberry Iced Tea", price: "₹99", desc: "Tangy and refreshing beverage." },
    ],
    "Shakes & Desserts": [
        { name: "Biscoff Shake", price: "₹249", desc: "Creamy shake with Lotus Biscoff cookies." },
        { name: "Dark Fantasy Shake", price: "₹249", desc: "Rich and decadent sweet craving." },
        { name: "Kitkat Shake", price: "₹249", desc: "Blended with iconic chocolate wafer treat." },
        { name: "Oreo Shake", price: "₹229", desc: "Indulgent shake with sandwich cookies." },
        { name: "Choco Lava Cake", price: "₹169", desc: "Molten chocolate center dessert." },
    ],
    "Mocktails": [
        { name: "Blue Curacao", price: "₹109", desc: "Vibrant citrus burst mocktail." },
        { name: "Green Apple", price: "₹109", desc: "Tart green apple fruity blend." },
        { name: "Mint Mojito", price: "₹109", desc: "Refreshing classic mint cooler." },
        { name: "Passion Fruit", price: "₹109", desc: "Exotic fruity and refreshing." },
    ]
}

export const AMENITIES = [
    {
        icon: "patio", label: "OUTDOOR PATIO",
        sub: "Fresh air seating"
    },
    {
        icon: "screen", label: "LIVE MATCH SCREENING",
        sub: "Big screen experience"
    },
    {
        icon: "wifi", label: "FREE HIGH-SPEED WI-FI",
        sub: "Work from the Den"
    },
    {
        icon: "diy", label: "DIY SERVICE MODE",
        sub: "Your pace, your way"
    }
]

export const TESTIMONIALS = [
    {
        name: "Bhumi Marden",
        role: "via Google Maps",
        text: "A calm, eco-friendly café that’s ideal for unhurried time with family or friends. The atmosphere is warm and welcoming, with a positive energy that makes you feel at ease. Delicious food and hygiene is a priority.",
        stars: 5
    },
    {
        name: "Gayatri Singh",
        role: "via Google Maps",
        text: "Really amazing experience. The staff, the ambiance, the food — everything was top-notch. Their Devil's Cheese Burger and the green apple mojito are must try. Highly recommended!",
        stars: 5
    },
    {
        name: "Ravi Raval",
        role: "via Google Maps",
        text: "The perfect spot for burger lovers. The burgers are absolutely amazing — juicy, flavorful, and well-made. Their coffee is also rich and perfectly balanced. Great place to hang out.",
        stars: 5
    }
]

export const STATS = [
    { value: "4.8★", label: "Google Rating" },
    { value: "2AM", label: "Closing Time" },
    { value: "₹350", label: "For Two" },
    { value: "146+", label: "Reviews" }
]

export const MATCH_DAY = {
  isActive: false,  // toggle this manually
  matchName: "INDIA VS AUSTRALIA"
}
