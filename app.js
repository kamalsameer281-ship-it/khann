/* ==========================================================================
   PIZZA JOHN'S CAFE MARDAN - OFFICIAL ONLINE ORDERING ENGINE
   100% Authentic Menu Data from Official Menu Flyers
   ========================================================================== */

const CAFE_INFO = {
  name: "Pizza John's Cafe Mardan",
  shortName: "Pizza John's",
  city: "Mardan",
  address: "Sakhi Tower, Opposite To Syed Children Hospital, Shamsi Road, Mardan, KPK",
  landline: "0937-871862",
  phoneNumbers: ["0312-5551503", "0312-5542211", "0344-9804882"],
  whatsapp: "+923125551503",
  whatsappDisplay: "0312-5551503",
  googleMapsUrl: "https://maps.app.goo.gl/WYHp6iPbvwMtAhYy8",
  minOrder: 800,
  deliveryFee: 0, // FREE HOME DELIVERY (for min order 800)
  deliveryTime: "In 45 Mints",
  hours: "10:00 AM – 11:59 PM (Till Late Midnight)"
};

// Crust Types from Menu Flyer
const CRUST_OPTIONS = [
  { id: "crust-hand", name: "Classic Hand Topping", price: 0 },
  { id: "crust-thin", name: "Crunchy Thin Crust", price: 0 },
  { id: "crust-deep", name: "Ultimate Deep Dish", price: 150 }
];

// Extra Toppings by Size from Menu Flyer
const EXTRA_TOPPING_PRICES = {
  small: 100,
  medium: 150,
  large: 200,
  family: 250
};

// Official Complete Menu Items
const MENU_ITEMS = [
  // ==================== 1. STANDARD PIZZAS ====================
  {
    id: "piz-1",
    name: "1. Chicken Tikka B.B.Q Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Top Seller ⭐",
    desc: "Tender tandoori B.B.Q chicken chunks, caramelized onions, mozzarella cheese & special pizza sauce.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-2",
    name: "2. Chicken Fajita Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Classic ⭐",
    desc: "Marinated Mexican fajita chicken, green bell peppers, sweet red onions & double mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-3",
    name: "3. Chicken Supreme Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Loaded ⭐",
    desc: "Loaded with chicken tikka, fajita chunks, sausages, black olives, mushrooms, onions, bell peppers & mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-4",
    name: "4. Tanduri Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Desi Taste 👑",
    desc: "Authentic spicy tandoori chicken, onions, green chilies, cilantro aroma & hot mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-5",
    name: "5. Chicken Achar Special Pizza",
    category: "pizzas",
    badge: "spicy",
    badgeLabel: "Chatpatta 🌶️",
    desc: "Zesty pickling achar spices infused in chicken, tangy achari masala, red onions & melted cheese.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-6",
    name: "6. Chicken Lover Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Meat Lover 🍗",
    desc: "Triple chicken sensation: tikka, smoked chicken boti, chicken sausages & double mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-7",
    name: "7. Vegetarian Pizza",
    category: "pizzas",
    badge: "veg",
    badgeLabel: "Vegetarian 🥦",
    desc: "Sweet corn, fresh mushrooms, black olives, tomatoes, bell peppers, onions & mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 550 },
      medium: { label: "Medium (11\")", price: 950 },
      large: { label: "Large (13\")", price: 1250 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 550
  },
  {
    id: "piz-8",
    name: "8. Afghani Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Mild & Smoky 👑",
    desc: "Smoky Afghani chicken boti, mild white pepper sauce, mushrooms, onions & mozzarella blend.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-9",
    name: "9. Pepperoni Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Classic ⭐",
    desc: "Loaded with premium halal pepperoni slices, marinara herb sauce & golden bubbled cheese.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-10",
    name: "10. Cheese Gold Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Extra Cheese 🧀",
    desc: "Triple cheese layer combining golden cheddar, creamy mozzarella & parmesan herbs.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-11",
    name: "11. Hot & Spicy Pizza",
    category: "pizzas",
    badge: "spicy",
    badgeLabel: "Hot & Spicy 🌶️",
    desc: "Spicy Mexican chicken, hot jalapenos, chili flakes, red onions & zesty tomato salsa sauce.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },
  {
    id: "piz-12",
    name: "12. Grilled Pizza",
    category: "pizzas",
    badge: null,
    badgeLabel: null,
    desc: "Tender flame-grilled chicken strips, BBQ drizzle, roasted bell peppers & mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 650 },
      medium: { label: "Medium (11\")", price: 1000 },
      large: { label: "Large (13\")", price: 1300 },
      family: { label: "Family (16\")", price: 1700 }
    },
    basePrice: 650
  },

  // ==================== 2. SPECIAL CRUST & CREAMY FLAVORS ====================
  {
    id: "piz-13",
    name: "13. Double Crust Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Double Layer 👑",
    desc: "Two layers of buttery dough packed with secret chicken filling, creamy sauce & cheese crust.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 750 },
      medium: { label: "Medium (11\")", price: 1200 },
      large: { label: "Large (13\")", price: 1500 },
      family: { label: "Family (16\")", price: 1900 }
    },
    basePrice: 750
  },
  {
    id: "piz-14",
    name: "14. Crown Crust Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Famous Crown 👑",
    desc: "Signature petal crown rim filled with cheese and chicken kabab balls, center loaded with spicy fajita.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 750 },
      medium: { label: "Medium (11\")", price: 1200 },
      large: { label: "Large (13\")", price: 1500 },
      family: { label: "Family (16\")", price: 1900 }
    },
    basePrice: 750
  },
  {
    id: "piz-15",
    name: "15. Donner Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Donner Kebab 👑",
    desc: "Succulent sliced donner meat, Turkish garlic sauce, crisp onions & mozzarella cheese.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 750 },
      medium: { label: "Medium (11\")", price: 1200 },
      large: { label: "Large (13\")", price: 1500 },
      family: { label: "Family (16\")", price: 1900 }
    },
    basePrice: 750
  },
  {
    id: "piz-16",
    name: "16. Chicken Crust Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Chicken Stuffed 🍗",
    desc: "Crust outer rim stuffed with savory spiced minced chicken & cheese bites.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 800 },
      medium: { label: "Medium (11\")", price: 1300 },
      large: { label: "Large (13\")", price: 1600 },
      family: { label: "Family (16\")", price: 2000 }
    },
    basePrice: 800
  },
  {
    id: "piz-17",
    name: "17. Mint Special Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Mint Zest 🌿",
    desc: "Refreshing garden mint & coriander sauce base, marinated chicken bites, onions & cheese.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 750 },
      medium: { label: "Medium (11\")", price: 1200 },
      large: { label: "Large (13\")", price: 1500 },
      family: { label: "Family (16\")", price: 1900 }
    },
    basePrice: 750
  },
  {
    id: "piz-18",
    name: "18. Stuff Kabab Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Kabab Stuffed 👑",
    desc: "Whole juicy chicken seekh kababs stuffed inside crust rim, topped with spicy chicken & olives.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 800 },
      medium: { label: "Medium (11\")", price: 1300 },
      large: { label: "Large (13\")", price: 1600 },
      family: { label: "Family (16\")", price: 2000 }
    },
    basePrice: 800
  },
  {
    id: "piz-19",
    name: "19. Labnani Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Lebanese Royal 👑",
    desc: "Lebanese inspired specialty with rich white garlic cream sauce, chicken boti, black olives & premium cheese.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 850 },
      medium: { label: "Medium (11\")", price: 1400 },
      large: { label: "Large (13\")", price: 1800 },
      family: { label: "Family (16\")", price: 2400 }
    },
    basePrice: 850
  },
  {
    id: "piz-20",
    name: "20. Train Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Mega Train 🚂",
    desc: "Massive rectangular train pizza serving 8-10 people! Multi-flavored feast for gatherings in Mardan.",
    image: "assets/images/hero-pizza.jpg",
    price: 2999
  },
  {
    id: "piz-21",
    name: "21. 21\" Inch Giant Pizza + 1 Ltr Drink",
    category: "pizzas",
    badge: "special",
    badgeLabel: "21\" Giant Monster 👑",
    desc: "Colossal 21-inch giant party pizza loaded with your choice of flavors + 1 Ltr chilled drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 2999
  },

  // ==================== 3. SUPER DEALS (TRIPLE TREAT BOX) ====================
  {
    id: "sdeal-1",
    name: "SUPER DEAL 1: Triple Treat Small (7\")",
    category: "super-deals",
    badge: "bestseller",
    badgeLabel: "3 Pizzas + Drink ⭐",
    desc: "3 Chicken Tikka Small Pizzas (7\") + 1 Ltr Chilled Drink Free!",
    image: "assets/images/hero-pizza.jpg",
    price: 1799,
    dealItems: ["3x Chicken Tikka Small Pizza (7\")", "1x 1 Ltr Drink FREE"]
  },
  {
    id: "sdeal-2",
    name: "SUPER DEAL 2: Triple Treat Medium (11\")",
    category: "super-deals",
    badge: "bestseller",
    badgeLabel: "Best Value Deal ⭐",
    desc: "3 Chicken Tikka Medium Pizzas (11\") + 1 Ltr Chilled Drink Free!",
    image: "assets/images/hero-pizza.jpg",
    price: 2799,
    dealItems: ["3x Chicken Tikka Medium Pizza (11\")", "1x 1 Ltr Drink FREE"]
  },
  {
    id: "sdeal-3",
    name: "SUPER DEAL 3: Triple Treat Large (13\")",
    category: "super-deals",
    badge: "special",
    badgeLabel: "Family Mega Box 👑",
    desc: "3 Chicken Tikka Large Pizzas (13\") + 1 Ltr Chilled Drink Free!",
    image: "assets/images/hero-pizza.jpg",
    price: 3799,
    dealItems: ["3x Chicken Tikka Large Pizza (13\")", "1x 1 Ltr Drink FREE"]
  },
  {
    id: "sdeal-4",
    name: "SUPER DEAL 4: Triple Treat Family (16\")",
    category: "super-deals",
    badge: "special",
    badgeLabel: "Huge Feast 👑",
    desc: "3 Chicken Tikka Family Pizzas (16\") + 1 Ltr Chilled Drink Free!",
    image: "assets/images/hero-pizza.jpg",
    price: 4799,
    dealItems: ["3x Chicken Tikka Family Pizza (16\")", "1x 1 Ltr Drink FREE"]
  },

  // ==================== 4. CLASSIC & FRIED DEALS (1-12) ====================
  {
    id: "deal-1",
    name: "Classics Deal 1",
    category: "classic-deals",
    badge: "bestseller",
    badgeLabel: "Deal 1 ⭐",
    desc: "1 Small Pizza + 2 Zinger Burgers + 1 Reg Fries + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 1500,
    dealItems: ["1x Small Pizza", "2x Zinger Burgers", "1x Reg Fries", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-2",
    name: "Classics Deal 2",
    category: "classic-deals",
    badge: "bestseller",
    badgeLabel: "Deal 2 ⭐",
    desc: "1 Medium Pizza + 3 Zinger Burgers + 1 Reg Fries + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 2250,
    dealItems: ["1x Medium Pizza", "3x Zinger Burgers", "1x Reg Fries", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-3",
    name: "Classics Deal 3",
    category: "classic-deals",
    badge: "bestseller",
    badgeLabel: "Deal 3 ⭐",
    desc: "1 Large Pizza + 2 Zinger Burgers + 1 Reg Fries + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 2250,
    dealItems: ["1x Large Pizza", "2x Zinger Burgers", "1x Reg Fries", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-4",
    name: "Fried Deal 4",
    category: "classic-deals",
    badge: null,
    badgeLabel: "Deal 4 🍗",
    desc: "5 Pcs Hot Wings + 1 Zinger Burger + 1 Reg Fries + 1 Reg Drink.",
    image: "assets/images/burger.jpg",
    price: 850,
    dealItems: ["5x Hot Wings", "1x Zinger Burger", "1x Reg Fries", "1x Reg Drink"]
  },
  {
    id: "deal-5",
    name: "Fried Deal 5",
    category: "classic-deals",
    badge: "special",
    badgeLabel: "Deal 5 🍗",
    desc: "10 Pcs Nuggets + 10 Pcs Hot Wings + 1 Medium Fries + 1 Ltr Drink.",
    image: "assets/images/loaded-fries.jpg",
    price: 1450,
    dealItems: ["10x Pcs Nuggets", "10x Pcs Hot Wings", "1x Medium Fries", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-6",
    name: "Fried Deal 6",
    category: "classic-deals",
    badge: null,
    badgeLabel: "Deal 6 🍗",
    desc: "Full Chicken Breast + 1 Reg Fries.",
    image: "assets/images/burger.jpg",
    price: 1600,
    dealItems: ["Full Chicken Breast", "1x Reg Fries"]
  },
  {
    id: "deal-7",
    name: "Deal 07",
    category: "classic-deals",
    badge: null,
    badgeLabel: "Deal 7 ⭐",
    desc: "1 Zinger Burger + 1 Chicken Pc + 1 Reg Fries + 1 Reg Drink.",
    image: "assets/images/burger.jpg",
    price: 750,
    dealItems: ["1x Zinger Burger", "1x Chicken Piece", "1x Reg Fries", "1x Reg Drink"]
  },
  {
    id: "deal-8",
    name: "Deal 08",
    category: "classic-deals",
    badge: null,
    badgeLabel: "Deal 8 🍕",
    desc: "1 Small Pizza B.B.Q + 1 Reg Fries + 1 Reg Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 800,
    dealItems: ["1x Small B.B.Q Pizza", "1x Reg Fries", "1x Reg Drink"]
  },
  {
    id: "deal-9",
    name: "Deal 09",
    category: "classic-deals",
    badge: "special",
    badgeLabel: "Deal 9 👑",
    desc: "1 Family Pizza Tikka (16\") + 3 Zinger Burgers + 1 Reg Fries + 1 Ltr Drink.",
    image: "assets/images/crown-crust.jpg",
    price: 2800,
    dealItems: ["1x Family Pizza Tikka", "3x Zinger Burgers", "1x Reg Fries", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-10",
    name: "Deal 10",
    category: "classic-deals",
    badge: "special",
    badgeLabel: "Crown Deal 👑",
    desc: "1 Crown Crust Large Pizza + 1 Large Fries + 1 Ltr Drink.",
    image: "assets/images/crown-crust.jpg",
    price: 1850,
    dealItems: ["1x Crown Crust Large Pizza", "1x Large Fries", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-11",
    name: "Deal 11",
    category: "classic-deals",
    badge: "bestseller",
    badgeLabel: "5 Zingers Pack ⭐",
    desc: "5 Crispy Zinger Burgers + 1 Ltr Drink.",
    image: "assets/images/burger.jpg",
    price: 1800,
    dealItems: ["5x Zinger Burgers", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-12",
    name: "Deal 12",
    category: "classic-deals",
    badge: "bestseller",
    badgeLabel: "Solo Zinger ⭐",
    desc: "1 Zinger Burger + 1 Reg Fries + 1 Reg Drink.",
    image: "assets/images/burger.jpg",
    price: 550,
    dealItems: ["1x Zinger Burger", "1x Reg Fries", "1x Reg Drink"]
  },

  // ==================== 5. FRIENDS & FAMILY DEALS (13-22) ====================
  {
    id: "deal-13",
    name: "Deal 13: 2 Small Pizzas + 2 Zingers",
    category: "family-deals",
    badge: "bestseller",
    badgeLabel: "Deal 13 ⭐",
    desc: "2 Small Pizzas + 2 Zinger Burgers + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 1950,
    dealItems: ["2x Small Pizzas", "2x Zinger Burgers", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-14",
    name: "Deal 14: 1 Large Pizza + Drink",
    category: "family-deals",
    badge: null,
    badgeLabel: "Deal 14 🍕",
    desc: "1 Large Pizza (13\") + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 1400,
    dealItems: ["1x Large Pizza (13\")", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-15",
    name: "Deal 15: 2 Zingers + 10 Hot Wings",
    category: "family-deals",
    badge: "bestseller",
    badgeLabel: "Deal 15 🍗",
    desc: "2 Zinger Burgers + 10 Pieces Hot Wings + 1 Ltr Drink.",
    image: "assets/images/burger.jpg",
    price: 1500,
    dealItems: ["2x Zinger Burgers", "10x Pieces Hot Wings", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-16",
    name: "Deal 16: 1 Large Pizza + 4 Zingers",
    category: "family-deals",
    badge: "special",
    badgeLabel: "Deal 16 👑",
    desc: "1 Large Pizza (13\") + 4 Zinger Burgers + 1 Ltr Drink.",
    image: "assets/images/crown-crust.jpg",
    price: 2700,
    dealItems: ["1x Large Pizza (13\")", "4x Zinger Burgers", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-17",
    name: "Deal 17: 1 Large Pizza + 2 Zingers",
    category: "family-deals",
    badge: "bestseller",
    badgeLabel: "Deal 17 ⭐",
    desc: "1 Large Pizza (13\") + 2 Zinger Burgers + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 2050,
    dealItems: ["1x Large Pizza (13\")", "2x Zinger Burgers", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-18",
    name: "Deal 18: 1 Large Labnani Pizza + Drink",
    category: "family-deals",
    badge: "special",
    badgeLabel: "Deal 18 👑",
    desc: "1 Large Labnani Pizza + 1 Ltr Drink.",
    image: "assets/images/crown-crust.jpg",
    price: 1900,
    dealItems: ["1x Large Labnani Pizza", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-19",
    name: "Deal 19: 2 Double Decker Burgers",
    category: "family-deals",
    badge: "bestseller",
    badgeLabel: "Deal 19 🍔",
    desc: "2 Double Decker Burgers + 2 Reg Drinks.",
    image: "assets/images/burger.jpg",
    price: 1100,
    dealItems: ["2x Double Decker Burgers", "2x Reg Drinks"]
  },
  {
    id: "deal-20",
    name: "Deal 20: Behari Roll + Drink",
    category: "family-deals",
    badge: null,
    badgeLabel: "Deal 20 🌯",
    desc: "Behari Roll With White Sauce + 1 Reg Drink.",
    image: "assets/images/burger.jpg",
    price: 600,
    dealItems: ["1x Behari Roll With White Sauce", "1x Reg Drink"]
  },
  {
    id: "deal-21",
    name: "Deal 21: 1 Large Pizza + 10 Hot Wings",
    category: "family-deals",
    badge: "special",
    badgeLabel: "Deal 21 ⭐",
    desc: "1 Large Pizza (13\") + 10 Pcs Hot Wings + 1 Ltr Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 2000,
    dealItems: ["1x Large Pizza (13\")", "10x Pcs Hot Wings", "1x 1 Ltr Drink"]
  },
  {
    id: "deal-22",
    name: "Deal 22: 20 Pcs Hot Wings + Drink",
    category: "family-deals",
    badge: "bestseller",
    badgeLabel: "Deal 22 🍗",
    desc: "20 Pieces Hot Wings + 1 Ltr Drink.",
    image: "assets/images/burger.jpg",
    price: 1500,
    dealItems: ["20x Pieces Hot Wings", "1x 1 Ltr Drink"]
  },

  // ==================== 6. BURGERS ====================
  {
    id: "bur-1",
    name: "Zinger Burger",
    category: "burgers",
    badge: "bestseller",
    badgeLabel: "Best Seller ⭐",
    desc: "Crispy fried whole chicken thigh filet, fresh iceberg lettuce, secret mayo sauce on toasted sesame brioche bun.",
    image: "assets/images/burger.jpg",
    price: 350
  },
  {
    id: "bur-2",
    name: "Zinger Cheese Burger",
    category: "burgers",
    badge: "bestseller",
    badgeLabel: "Cheesy ⭐",
    desc: "Signature crispy zinger with a melted golden slice of dairy cheddar cheese and mayo sauce.",
    image: "assets/images/burger.jpg",
    price: 450
  },
  {
    id: "bur-3",
    name: "Chicken Burger",
    category: "burgers",
    badge: null,
    badgeLabel: null,
    desc: "Tender seasoned chicken patty, lettuce, onions, and garlic sauce.",
    image: "assets/images/burger.jpg",
    price: 300
  },
  {
    id: "bur-4",
    name: "Chicken Cheese Burger",
    category: "burgers",
    badge: null,
    badgeLabel: null,
    desc: "Chicken patty topped with melted cheddar cheese slice, fresh lettuce and mayo.",
    image: "assets/images/burger.jpg",
    price: 350
  },
  {
    id: "bur-5",
    name: "Tower Burger",
    category: "burgers",
    badge: "special",
    badgeLabel: "Tower Beast 👑",
    desc: "Crispy chicken zinger filet + crispy golden hashbrown potato patty + melted cheese.",
    image: "assets/images/burger.jpg",
    price: 450
  },
  {
    id: "bur-6",
    name: "Double Decker Burger",
    category: "burgers",
    badge: "bestseller",
    badgeLabel: "Double Layer ⭐",
    desc: "Two stacked crispy chicken filets, double cheese, lettuce, and secret house sauce.",
    image: "assets/images/burger.jpg",
    price: 500
  },
  {
    id: "bur-7",
    name: "Grill Tower Burger",
    category: "burgers",
    badge: "special",
    badgeLabel: "Flame Grilled 👑",
    desc: "Flame-grilled chicken breast + hashbrown + melted cheddar cheese slice + BBQ sauce.",
    image: "assets/images/burger.jpg",
    price: 600
  },

  // ==================== 7. PARATHA ROLLS ====================
  {
    id: "rol-1",
    name: "Zinger Paratha",
    category: "paratha",
    badge: "bestseller",
    badgeLabel: "Favorite ⭐",
    desc: "Crispy fried zinger strips wrapped in flaky golden paratha with tangy mayo sauce & onions.",
    image: "assets/images/burger.jpg",
    price: 350
  },
  {
    id: "rol-2",
    name: "Zinger Cheese Paratha",
    category: "paratha",
    badge: "bestseller",
    badgeLabel: "Cheese Roll ⭐",
    desc: "Crunchy zinger cuts smothered in melted cheddar cheese rolled into a hot buttered paratha.",
    image: "assets/images/burger.jpg",
    price: 380
  },
  {
    id: "rol-3",
    name: "Chicken Paratha",
    category: "paratha",
    badge: null,
    badgeLabel: null,
    desc: "Spiced chicken boti, mint raita, sliced onions in crisp golden paratha.",
    image: "assets/images/burger.jpg",
    price: 300
  },
  {
    id: "rol-4",
    name: "Chicken Cheese Paratha",
    category: "paratha",
    badge: null,
    badgeLabel: null,
    desc: "Chicken boti + melted cheese blend wrapped in fresh crispy paratha.",
    image: "assets/images/burger.jpg",
    price: 350
  },
  {
    id: "rol-5",
    name: "Behari Roll with White Sauce",
    category: "paratha",
    badge: "special",
    badgeLabel: "Chef's Behari 👑",
    desc: "Tender spicy Behari kebab roll drizzled with signature white garlic herb sauce.",
    image: "assets/images/burger.jpg",
    price: 400
  },

  // ==================== 8. SHAWARMA ====================
  {
    id: "shw-1",
    name: "Zinger Shawarma",
    category: "shawarma",
    badge: "bestseller",
    badgeLabel: "Zinger Pita ⭐",
    desc: "Crispy zinger chicken strips, pickled cucumber, tahini garlic sauce in soft pita bread.",
    image: "assets/images/burger.jpg",
    price: 300
  },
  {
    id: "shw-2",
    name: "Zinger Cheese Shawarma",
    category: "shawarma",
    badge: "bestseller",
    badgeLabel: "Cheesy Shawarma ⭐",
    desc: "Zinger pita shawarma with melted cheese slice and garlic herb sauce.",
    image: "assets/images/burger.jpg",
    price: 350
  },
  {
    id: "shw-3",
    name: "Chicken Shawarma",
    category: "shawarma",
    badge: null,
    badgeLabel: null,
    desc: "Traditional rotisserie style chicken, tahini, pickles, and garlic sauce.",
    image: "assets/images/burger.jpg",
    price: 250
  },
  {
    id: "shw-4",
    name: "Chicken Cheese Shawarma",
    category: "shawarma",
    badge: null,
    badgeLabel: null,
    desc: "Rotisserie chicken with melted cheddar cheese slice in warm pita bread.",
    image: "assets/images/burger.jpg",
    price: 300
  },
  {
    id: "shw-5",
    name: "Vegetable Shawarma",
    category: "shawarma",
    badge: "veg",
    badgeLabel: "Veggie 🥗",
    desc: "Crisp lettuce, cucumbers, tomatoes, sweet corn, pickles, and creamy garlic dressing.",
    image: "assets/images/burger.jpg",
    price: 200
  },

  // ==================== 9. FRIED CHICKEN & WINGS ====================
  {
    id: "frd-1",
    name: "2 Piece Fried Chicken",
    category: "fried",
    badge: "bestseller",
    badgeLabel: "Crispy Fried 🍗",
    desc: "Two golden, crunchy battered chicken pieces seasoned with secret herbs.",
    image: "assets/images/burger.jpg",
    price: 500
  },
  {
    id: "frd-2",
    name: "10 Pieces Hot Wings",
    category: "fried",
    badge: "spicy",
    badgeLabel: "10 Pcs Wings 🌶️",
    desc: "Ten spicy crispy hot wings tossed with house chili dip.",
    image: "assets/images/burger.jpg",
    price: 700
  },
  {
    id: "frd-3",
    name: "10 Pieces Hot Shots",
    category: "fried",
    badge: "bestseller",
    badgeLabel: "10 Pcs Shots 🍗",
    desc: "Bite-sized boneless crispy chicken pops with a kick of spice.",
    image: "assets/images/burger.jpg",
    price: 700
  },
  {
    id: "frd-4",
    name: "10 Pieces Chicken Nuggets",
    category: "fried",
    badge: null,
    badgeLabel: "10 Pcs Nuggets 🍗",
    desc: "Golden fried chicken nuggets served hot with garlic dip.",
    image: "assets/images/burger.jpg",
    price: 700
  },

  // ==================== 10. FRIES ====================
  {
    id: "fry-1",
    name: "French Fries Regular",
    category: "fries",
    badge: null,
    badgeLabel: null,
    desc: "Classic salted crispy french fries.",
    image: "assets/images/loaded-fries.jpg",
    price: 150
  },
  {
    id: "fry-2",
    name: "Large French Fries",
    category: "fries",
    badge: "bestseller",
    badgeLabel: "Large Box 🍟",
    desc: "Large portion of hot golden salted fries.",
    image: "assets/images/loaded-fries.jpg",
    price: 250
  },
  {
    id: "fry-3",
    name: "Loaded Fries",
    category: "fries",
    badge: "special",
    badgeLabel: "Signature Loaded 👑",
    desc: "Heaping platter of crispy fries smothered in melted cheddar cheese sauce, chicken chunks, jalapenos & secret garlic drizzle.",
    image: "assets/images/loaded-fries.jpg",
    price: 500
  },

  // ==================== 11. DRINKS ====================
  {
    id: "drk-1",
    name: "1 Ltr Cold Drink",
    category: "drinks",
    badge: "bestseller",
    badgeLabel: "1 Liter 🥤",
    desc: "Chilled 1 Liter bottle (Pepsi / 7Up / Mirinda / Mountain Dew).",
    image: "assets/images/drinks.jpg",
    price: 150
  },
  {
    id: "drk-2",
    name: "Regular Drink (Can / 250ml)",
    category: "drinks",
    badge: null,
    badgeLabel: null,
    desc: "Cold 250ml drink can (Pepsi / 7Up / Dew / Mirinda).",
    image: "assets/images/drinks.jpg",
    price: 100
  },
  {
    id: "drk-3",
    name: "Mineral Water (500ml)",
    category: "drinks",
    badge: null,
    badgeLabel: null,
    desc: "Pure sealed chilled mineral water bottle.",
    image: "assets/images/drinks.jpg",
    price: 70
  },

  // ==================== 12. SAUCES & DIPS ====================
  {
    id: "sau-1",
    name: "White Garlic Herb Sauce",
    category: "sauces",
    badge: "bestseller",
    badgeLabel: "Famous White Dip ⭐",
    desc: "Pizza John's famous creamy roasted garlic white sauce dip.",
    image: "assets/images/sauces.jpg",
    price: 60
  },
  {
    id: "sau-2",
    name: "Special Secret Cafe Sauce",
    category: "sauces",
    badge: "special",
    badgeLabel: "Chef's Secret 👑",
    desc: "Tangy, smoky, lightly spiced signature house dip.",
    image: "assets/images/sauces.jpg",
    price: 80
  },
  {
    id: "sau-3",
    name: "Spicy Mayo Dip",
    category: "sauces",
    badge: "spicy",
    badgeLabel: "Spicy Dip 🌶️",
    desc: "Creamy mayonnaise blended with red chili spices.",
    image: "assets/images/sauces.jpg",
    price: 60
  },
  {
    id: "sau-4",
    name: "Melted Cheese Sauce Cup",
    category: "sauces",
    badge: "special",
    badgeLabel: "Warm Cheese 🧀",
    desc: "Cup of warm velvety cheddar cheese sauce.",
    image: "assets/images/sauces.jpg",
    price: 100
  }
];

// Available Promo Codes
const VOUCHERS = {
  "MARDAN10": { discountPercent: 10, label: "10% Off Mardan Special" },
  "JHONS15": { discountPercent: 15, label: "15% Off Chef's Welcome" }
};

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem("pj_cart") || "[]");
let currentCategory = "all";
let searchQuery = "";
let appliedVoucher = null;
let currentCustomizingItem = null;
let selectedPizzaSize = "medium";
let selectedPizzaCrust = "crust-hand";
let hasExtraTopping = false;
let orderDeliveryType = "delivery";

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderDeals();
  updateCartBadge();
  setupEventListeners();
  initHeaderScroll();
});

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   MENU RENDERING
   ========================================================================== */
function renderMenu() {
  const grid = document.getElementById("menuProductsGrid");
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-pizza-slice" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 8px;">No Items Found</h3>
        <p style="color: var(--text-muted);">Try searching for "Tikka", "Zinger", "Crown Crust", "Paratha", "Shawarma", or "Wings".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const badgeHtml = item.badgeLabel ? `
      <span class="badge-pill badge-${item.badge}">${item.badgeLabel}</span>
    ` : '';

    const priceDisplay = item.isPizza 
      ? `₨ ${item.basePrice.toLocaleString()} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-dim);">(Small)</span>`
      : `₨ ${item.price.toLocaleString()}`;

    const buttonLabel = item.isPizza 
      ? `Choose Size <i class="fa-solid fa-sliders"></i>` 
      : `Add to Cart <i class="fa-solid fa-plus"></i>`;

    return `
      <div class="food-card" data-id="${item.id}">
        <div class="food-card-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${badgeHtml}
        </div>
        <div class="food-card-body">
          <span class="food-card-category">${item.category.replace("-", " ")}</span>
          <h3 class="food-card-title">${item.name}</h3>
          <p class="food-card-desc">${item.desc}</p>
          <div class="food-card-footer">
            <div class="food-price-block">
              <span class="food-price-label">Price</span>
              <span class="food-price">${priceDisplay}</span>
            </div>
            <button class="btn-add-cart" onclick="handleItemAction('${item.id}')">
              ${buttonLabel}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderDeals() {
  const dealsGrid = document.getElementById("dealsHighlightGrid");
  if (!dealsGrid) return;

  // Highlight the 4 Super Deals (Triple Treat Box)
  const superDeals = MENU_ITEMS.filter(item => item.category === "super-deals");

  dealsGrid.innerHTML = superDeals.map(deal => {
    const itemsList = (deal.dealItems || []).map(i => `
      <li><i class="fa-solid fa-check"></i> ${i}</li>
    `).join("");

    return `
      <div class="deal-card">
        <span class="deal-badge">${deal.badgeLabel || 'HOT DEAL'}</span>
        <span class="deal-tag">Triple Treat Box</span>
        <h3 class="deal-title">${deal.name}</h3>
        <ul class="deal-items-list">
          ${itemsList}
        </ul>
        <div class="deal-footer">
          <div class="deal-pricing">
            <span class="old-price">₨ ${(deal.price + 350).toLocaleString()}</span>
            <div class="final-price">₨ ${deal.price.toLocaleString()}</div>
          </div>
          <button class="btn-add-cart" onclick="addDirectToCart('${deal.id}')">
            Order Deal <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
function setupEventListeners() {
  // Category Tab Filters
  document.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }

  // Cart Drawer open/close
  const cartBtn = document.getElementById("cartToggleBtn");
  const closeCartBtn = document.getElementById("cartCloseBtn");
  const cartOverlay = document.getElementById("cartDrawerOverlay");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  // Pizza modal close
  const customModalClose = document.getElementById("customModalCloseBtn");
  const customModalOverlay = document.getElementById("customModalOverlay");
  if (customModalClose) customModalClose.addEventListener("click", closeCustomModal);
  if (customModalOverlay) {
    customModalOverlay.addEventListener("click", (e) => {
      if (e.target === customModalOverlay) closeCustomModal();
    });
  }

  // Checkout modal close
  const checkoutModalClose = document.getElementById("checkoutModalCloseBtn");
  const checkoutModalOverlay = document.getElementById("checkoutModalOverlay");
  if (checkoutModalClose) checkoutModalClose.addEventListener("click", closeCheckoutModal);
  if (checkoutModalOverlay) {
    checkoutModalOverlay.addEventListener("click", (e) => {
      if (e.target === checkoutModalOverlay) closeCheckoutModal();
    });
  }

  // Tracker modal close
  const trackerModalClose = document.getElementById("trackerModalCloseBtn");
  if (trackerModalClose) trackerModalClose.addEventListener("click", closeTrackerModal);

  // Voucher apply button
  const voucherBtn = document.getElementById("applyVoucherBtn");
  if (voucherBtn) {
    voucherBtn.addEventListener("click", applyVoucherCode);
  }

  // Order method delivery / takeaway
  document.querySelectorAll(".order-method-toggle .method-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".order-method-toggle .method-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      orderDeliveryType = btn.getAttribute("data-type");
      
      const addrBlock = document.getElementById("deliveryAddressBlock");
      if (addrBlock) {
        addrBlock.style.display = orderDeliveryType === "takeaway" ? "none" : "block";
      }
    });
  });

  // Mobile navigation hamburger toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.querySelector(".nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#14151a";
        navLinks.style.padding = "20px";
        navLinks.style.borderBottom = "1px solid var(--border-color)";
      }
    });
  }
}

/* ==========================================================================
   CART ENGINE
   ========================================================================== */
function handleItemAction(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (item.isPizza && item.sizes) {
    openCustomModal(item);
  } else {
    addDirectToCart(itemId);
  }
}

function addDirectToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = cart.findIndex(c => c.itemId === itemId && !c.isCustom);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      cartId: "cart-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
      itemId: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      qty: 1,
      isCustom: false,
      metaText: item.category.toUpperCase().replace("-", " ")
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`Added ${item.name} to cart! 🛒`);
}

function saveCart() {
  localStorage.setItem("pj_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const badge = document.getElementById("cartCountBadge");
  if (badge) {
    badge.textContent = totalQty;
  }
}

function openCart() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) {
    renderCartItems();
    overlay.classList.add("active");
  }
}

function closeCart() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.remove("active");
}

function renderCartItems() {
  const container = document.getElementById("cartDrawerItemsList");
  const subtotalEl = document.getElementById("cartSubtotalDisplay");
  const deliveryEl = document.getElementById("cartDeliveryFeeDisplay");
  const discountEl = document.getElementById("cartDiscountDisplay");
  const totalEl = document.getElementById("cartGrandTotalDisplay");
  const discountRow = document.getElementById("cartDiscountRow");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <h3>Your Food Bag is Empty</h3>
        <p>Explore Pizza John's hot pizzas, burgers, shawarma, and loaded fries in Mardan.</p>
        <button class="btn-primary" onclick="closeCart()" style="padding: 10px 24px; font-size: 0.9rem;">
          Browse Menu
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₨ 0";
    if (deliveryEl) deliveryEl.textContent = "FREE";
    if (discountRow) discountRow.style.display = "none";
    if (totalEl) totalEl.textContent = "₨ 0";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <div class="cart-item-thumb">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.metaText || ''}</div>
        <div class="cart-item-price">₨ ${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateItemQty('${item.cartId}', -1)"><i class="fa-solid fa-minus"></i></button>
        <span class="qty-count">${item.qty}</span>
        <button class="qty-btn" onclick="updateItemQty('${item.cartId}', 1)"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem('${item.cartId}')" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");

  // Calculate Totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  // Pizza John's offers FREE Home Delivery (Minimum delivery order ₨ 800)
  const delivery = 0;
  
  let discount = 0;
  if (appliedVoucher) {
    discount = Math.round((subtotal * appliedVoucher.discountPercent) / 100);
    if (discountRow) {
      discountRow.style.display = "flex";
      discountEl.textContent = `- ₨ ${discount.toLocaleString()}`;
    }
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const grandTotal = Math.max(0, subtotal + delivery - discount);

  if (subtotalEl) subtotalEl.textContent = `₨ ${subtotal.toLocaleString()}`;
  if (deliveryEl) {
    deliveryEl.innerHTML = `<span style="color: #25d366; font-weight: 700;">FREE DELIVERY</span>`;
  }
  if (totalEl) totalEl.textContent = `₨ ${grandTotal.toLocaleString()}`;
}

function updateItemQty(cartId, delta) {
  const index = cart.findIndex(c => c.cartId === cartId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function removeCartItem(cartId) {
  cart = cart.filter(c => c.cartId !== cartId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  showToast("Item removed from bag");
}

function applyVoucherCode() {
  const input = document.getElementById("cartVoucherInput");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (VOUCHERS[code]) {
    appliedVoucher = VOUCHERS[code];
    showToast(`Voucher ${code} applied! ${appliedVoucher.label} 🎉`);
    renderCartItems();
  } else {
    showToast("Invalid promo code. Try 'MARDAN10' or 'JHONS15' 🏷️");
  }
}

/* ==========================================================================
   PIZZA CUSTOMIZATION MODAL ENGINE (7", 11", 13", 16")
   ========================================================================== */
function openCustomModal(item) {
  currentCustomizingItem = item;
  selectedPizzaSize = item.sizes.medium ? "medium" : Object.keys(item.sizes)[0];
  selectedPizzaCrust = "crust-hand";
  hasExtraTopping = false;

  const overlay = document.getElementById("customModalOverlay");
  const title = document.getElementById("customModalItemTitle");
  const desc = document.getElementById("customModalItemDesc");
  const img = document.getElementById("customModalItemImg");
  const sizeGrid = document.getElementById("customModalSizeOptions");
  const crustGrid = document.getElementById("customModalCrustOptions");
  const addonGrid = document.getElementById("customModalAddonOptions");

  if (!overlay) return;

  title.textContent = item.name;
  desc.textContent = item.desc;
  img.src = item.image;

  // Render Sizes (Small 7", Medium 11", Large 13", Family 16")
  sizeGrid.innerHTML = Object.entries(item.sizes).map(([key, data]) => `
    <div class="custom-option-label ${key === selectedPizzaSize ? 'selected' : ''}" onclick="selectPizzaSize('${key}')">
      <span class="opt-name">${data.label}</span>
      <span class="opt-price">₨ ${data.price.toLocaleString()}</span>
    </div>
  `).join("");

  // Render Crust Styles (Classic Hand Topping, Crunchy Thin, Ultimate Deep Dish)
  crustGrid.innerHTML = CRUST_OPTIONS.map(c => `
    <div class="custom-option-label ${c.id === selectedPizzaCrust ? 'selected' : ''}" onclick="selectPizzaCrust('${c.id}')">
      <span class="opt-name">${c.name}</span>
      <span class="opt-price">${c.price > 0 ? `+₨ ${c.price}` : 'Free'}</span>
    </div>
  `).join("");

  // Render Extra Topping Checkbox Option
  const toppingCost = EXTRA_TOPPING_PRICES[selectedPizzaSize] || 150;
  addonGrid.innerHTML = `
    <div class="custom-option-label ${hasExtraTopping ? 'selected' : ''}" onclick="toggleExtraTopping()">
      <span class="opt-name">Extra Topping & Cheese Blast</span>
      <span class="opt-price" id="extraToppingPriceDisplay">+₨ ${toppingCost}</span>
    </div>
  `;

  updateCustomModalPrice();
  overlay.classList.add("active");
}

function closeCustomModal() {
  const overlay = document.getElementById("customModalOverlay");
  if (overlay) overlay.classList.remove("active");
  currentCustomizingItem = null;
}

function selectPizzaSize(sizeKey) {
  selectedPizzaSize = sizeKey;
  document.querySelectorAll("#customModalSizeOptions .custom-option-label").forEach((el, index) => {
    const key = Object.keys(currentCustomizingItem.sizes)[index];
    el.classList.toggle("selected", key === sizeKey);
  });

  // Update extra topping price dynamically based on size
  const toppingCost = EXTRA_TOPPING_PRICES[selectedPizzaSize] || 150;
  const toppingDisplay = document.getElementById("extraToppingPriceDisplay");
  if (toppingDisplay) {
    toppingDisplay.textContent = `+₨ ${toppingCost}`;
  }

  updateCustomModalPrice();
}

function selectPizzaCrust(crustId) {
  selectedPizzaCrust = crustId;
  document.querySelectorAll("#customModalCrustOptions .custom-option-label").forEach((el, index) => {
    const id = CRUST_OPTIONS[index].id;
    el.classList.toggle("selected", id === crustId);
  });
  updateCustomModalPrice();
}

function toggleExtraTopping() {
  hasExtraTopping = !hasExtraTopping;
  const addonLabel = document.querySelector("#customModalAddonOptions .custom-option-label");
  if (addonLabel) {
    addonLabel.classList.toggle("selected", hasExtraTopping);
  }
  updateCustomModalPrice();
}

function calculateCustomPizzaPrice() {
  if (!currentCustomizingItem) return 0;
  const sizePrice = currentCustomizingItem.sizes[selectedPizzaSize]?.price || currentCustomizingItem.basePrice;
  const crustPrice = CRUST_OPTIONS.find(c => c.id === selectedPizzaCrust)?.price || 0;
  const toppingPrice = hasExtraTopping ? (EXTRA_TOPPING_PRICES[selectedPizzaSize] || 150) : 0;

  return sizePrice + crustPrice + toppingPrice;
}

function updateCustomModalPrice() {
  const total = calculateCustomPizzaPrice();
  const priceDisplay = document.getElementById("customModalTotalPrice");
  if (priceDisplay) {
    priceDisplay.textContent = `₨ ${total.toLocaleString()}`;
  }
}

function addCustomizedPizzaToCart() {
  if (!currentCustomizingItem) return;

  const sizeObj = currentCustomizingItem.sizes[selectedPizzaSize];
  const crustObj = CRUST_OPTIONS.find(c => c.id === selectedPizzaCrust);

  let metaParts = [sizeObj.label, crustObj.name];
  if (hasExtraTopping) {
    metaParts.push("Extra Topping");
  }

  const finalUnitPrice = calculateCustomPizzaPrice();

  cart.push({
    cartId: "cart-piz-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
    itemId: currentCustomizingItem.id,
    name: currentCustomizingItem.name,
    image: currentCustomizingItem.image,
    price: finalUnitPrice,
    qty: 1,
    isCustom: true,
    metaText: metaParts.join(" • ")
  });

  saveCart();
  updateCartBadge();
  closeCustomModal();
  showToast(`Added ${currentCustomizingItem.name} (${sizeObj.label}) to cart! 🍕`);
  openCart();
}

/* ==========================================================================
   CHECKOUT & WHATSAPP ENGINE
   ========================================================================== */
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add items first. 🛒");
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (orderDeliveryType === "delivery" && subtotal < CAFE_INFO.minOrder) {
    showToast(`Minimum order for free home delivery in Mardan is ₨ ${CAFE_INFO.minOrder}. Current: ₨ ${subtotal}. ⚠️`);
  }

  closeCart();
  const overlay = document.getElementById("checkoutModalOverlay");
  if (overlay) overlay.classList.add("active");
}

function closeCheckoutModal() {
  const overlay = document.getElementById("checkoutModalOverlay");
  if (overlay) overlay.classList.remove("active");
}

function getOrderSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = 0; // Free Home Delivery
  let discount = 0;
  if (appliedVoucher) {
    discount = Math.round((subtotal * appliedVoucher.discountPercent) / 100);
  }
  const grandTotal = Math.max(0, subtotal + delivery - discount);
  return { subtotal, delivery, discount, grandTotal };
}

function placeWhatsAppOrder() {
  const name = document.getElementById("checkoutCustName")?.value.trim();
  const phone = document.getElementById("checkoutCustPhone")?.value.trim();
  const area = document.getElementById("checkoutDeliveryArea")?.value;
  const address = document.getElementById("checkoutCustAddress")?.value.trim();
  const notes = document.getElementById("checkoutCustNotes")?.value.trim();
  const payment = document.getElementById("checkoutPaymentMethod")?.value;

  if (!name || !phone) {
    showToast("Please enter your name and phone/WhatsApp number! ⚠️");
    return;
  }

  if (orderDeliveryType === "delivery" && (!address || !area)) {
    showToast("Please specify your delivery area and address in Mardan! ⚠️");
    return;
  }

  const { subtotal, delivery, discount, grandTotal } = getOrderSummary();
  const orderId = "PJ-" + Math.floor(1000 + Math.random() * 9000);

  // Build clean Pakistani WhatsApp message for Pizza John's Mardan
  let msg = `*🍕 NEW ONLINE ORDER - PIZZA JOHN'S MARDAN*\n`;
  msg += `*Order ID:* #${orderId}\n`;
  msg += `*Customer Name:* ${name}\n`;
  msg += `*Contact Phone:* ${phone}\n`;
  msg += `*Order Type:* ${orderDeliveryType === "delivery" ? "🚀 Free Home Delivery" : "🛍️ Takeaway / Pickup"}\n`;
  
  if (orderDeliveryType === "delivery") {
    msg += `*Town / Area:* ${area}, Mardan\n`;
    msg += `*Street Address:* ${address}\n`;
  }
  
  msg += `*Payment Method:* ${payment}\n`;
  if (notes) msg += `*Special Instructions:* ${notes}\n`;

  msg += `\n*📦 ORDER ITEMS:*\n`;
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}* x${item.qty}\n`;
    if (item.metaText) msg += `   ↳ _${item.metaText}_\n`;
    msg += `   ↳ ₨ ${(item.price * item.qty).toLocaleString()}\n`;
  });

  msg += `\n*💰 BILL SUMMARY:*\n`;
  msg += `Subtotal: ₨ ${subtotal.toLocaleString()}\n`;
  if (discount > 0) msg += `Voucher Discount: -₨ ${discount.toLocaleString()}\n`;
  msg += `Home Delivery: FREE\n`;
  msg += `*Total Payable: ₨ ${grandTotal.toLocaleString()}*\n`;
  msg += `\n📍 _Order sent to Pizza John's Mardan (Shamsi Road opp Syed Children Hospital)_`;

  const encodedUrl = `https://wa.me/923125551503?text=${encodeURIComponent(msg)}`;
  window.open(encodedUrl, "_blank");

  // Show confirmation modal
  showTrackerModal(orderId, name, grandTotal);
}

function placeInstantWebOrder() {
  const name = document.getElementById("checkoutCustName")?.value.trim();
  const phone = document.getElementById("checkoutCustPhone")?.value.trim();
  const area = document.getElementById("checkoutDeliveryArea")?.value;
  const address = document.getElementById("checkoutCustAddress")?.value.trim();

  if (!name || !phone) {
    showToast("Please enter your name and phone number! ⚠️");
    return;
  }

  if (orderDeliveryType === "delivery" && (!address || !area)) {
    showToast("Please enter your delivery area and address in Mardan! ⚠️");
    return;
  }

  const { grandTotal } = getOrderSummary();
  const orderId = "PJ-" + Math.floor(1000 + Math.random() * 9000);

  showTrackerModal(orderId, name, grandTotal);
}

function showTrackerModal(orderId, customerName, totalAmount) {
  closeCheckoutModal();

  const overlay = document.getElementById("trackerModalOverlay");
  const orderIdEl = document.getElementById("trackerOrderIdDisplay");
  const receiptItems = document.getElementById("trackerReceiptItems");
  const totalEl = document.getElementById("trackerTotalDisplay");

  if (!overlay) return;

  if (orderIdEl) orderIdEl.textContent = `Order #${orderId}`;
  if (totalEl) totalEl.textContent = `₨ ${totalAmount.toLocaleString()}`;

  if (receiptItems) {
    receiptItems.innerHTML = cart.map(item => `
      <div class="receipt-row">
        <span>${item.name} (x${item.qty})</span>
        <span>₨ ${(item.price * item.qty).toLocaleString()}</span>
      </div>
    `).join("");
  }

  // Clear cart
  cart = [];
  appliedVoucher = null;
  saveCart();
  updateCartBadge();

  overlay.classList.add("active");
  showToast("Order confirmed! Pizza John's kitchen is preparing your order... 🔥");
}

function closeTrackerModal() {
  const overlay = document.getElementById("trackerModalOverlay");
  if (overlay) overlay.classList.remove("active");
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
