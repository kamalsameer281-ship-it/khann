/* ==========================================================================
   PIZZA JHON'S MARDAN - WEB APPLICATION & ORDERING ENGINE
   ========================================================================== */

const CAFE_INFO = {
  name: "Pizza Jhon's Cafe",
  city: "Mardan",
  address: "Haji Rehmat Khan Medical Plaza, Shamsi Road, Opposite Yateem Khana, Mardan, KPK",
  landline: "0937-871862",
  whatsapp: "+923125551503",
  whatsappDisplay: "0312-5551503",
  googleMapsUrl: "https://maps.app.goo.gl/WYHp6iPbvwMtAhYy8",
  deliveryFee: 100,
  freeDeliveryThreshold: 1500,
  hours: "12:00 PM - 02:00 AM Daily"
};

// Comprehensive Menu Catalog
const MENU_ITEMS = [
  // PIZZAS
  {
    id: "piz-1",
    name: "Chicken Tikka Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Popular ⭐",
    desc: "Tender tandoori chicken tikka chunks, caramelized red onions, aromatic herbs & thick melted mozzarella cheese.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 490 },
      medium: { label: "Medium (10\")", price: 990 },
      large: { label: "Large (13\")", price: 1490 },
      monster: { label: "Monster (21\")", price: 2490 }
    },
    basePrice: 490
  },
  {
    id: "piz-2",
    name: "Crown Crust Special Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Chef's Crown 👑",
    desc: "Our iconic specialty! Cheese-stuffed petal crown crust rim loaded with spiced fajita chunks, olives, and golden cheese.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      medium: { label: "Medium (10\")", price: 1350 },
      large: { label: "Large (13\")", price: 1850 },
      monster: { label: "Monster (21\")", price: 2990 }
    },
    basePrice: 1350
  },
  {
    id: "piz-3",
    name: "Chicken Fajita Pizza",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Classic ⭐",
    desc: "Marinated Mexican-spiced chicken, crisp green bell peppers, sweet onions & double layered mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 490 },
      medium: { label: "Medium (10\")", price: 990 },
      large: { label: "Large (13\")", price: 1490 },
      monster: { label: "Monster (21\")", price: 2490 }
    },
    basePrice: 490
  },
  {
    id: "piz-4",
    name: "Fajita Sicilian Pizza",
    category: "pizzas",
    badge: "spicy",
    badgeLabel: "Spicy 🌶️",
    desc: "For spice lovers! Fiery chicken, spicy sliced jalapenos, sauteed mushrooms, onions, and hot chili flakes.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 520 },
      medium: { label: "Medium (10\")", price: 1050 },
      large: { label: "Large (13\")", price: 1550 },
      monster: { label: "Monster (21\")", price: 2590 }
    },
    basePrice: 520
  },
  {
    id: "piz-5",
    name: "Creamy Malai Boti Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Creamy Royal 👑",
    desc: "Melt-in-your-mouth creamy malai chicken cubes, mild aromatic spices, fresh cream swirl & rich mozzarella blend.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 550 },
      medium: { label: "Medium (10\")", price: 1090 },
      large: { label: "Large (13\")", price: 1620 },
      monster: { label: "Monster (21\")", price: 2690 }
    },
    basePrice: 550
  },
  {
    id: "piz-6",
    name: "Pizza John's Royal Supreme",
    category: "pizzas",
    badge: "bestseller",
    badgeLabel: "Loaded ⭐",
    desc: "The ultimate loaded pie: smoked chicken, beef pepperoni, sausages, black olives, bell peppers, and extra cheese.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 580 },
      medium: { label: "Medium (10\")", price: 1150 },
      large: { label: "Large (13\")", price: 1690 },
      monster: { label: "Monster (21\")", price: 2790 }
    },
    basePrice: 580
  },
  {
    id: "piz-7",
    name: "Afghani Feast Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Smoky 👑",
    desc: "Smoky Afghani chicken chunks infused with white pepper, herbs, onions, and rich garlic sauce over cheese.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 540 },
      medium: { label: "Medium (10\")", price: 1080 },
      large: { label: "Large (13\")", price: 1590 },
      monster: { label: "Monster (21\")", price: 2650 }
    },
    basePrice: 540
  },
  {
    id: "piz-8",
    name: "Peri Peri Blaze Pizza",
    category: "pizzas",
    badge: "spicy",
    badgeLabel: "Fiery 🌶️",
    desc: "Tangy & hot peri peri chicken, red paprika, jalapeno peppers, and zesty peri peri drizzle.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 530 },
      medium: { label: "Medium (10\")", price: 1070 },
      large: { label: "Large (13\")", price: 1590 },
      monster: { label: "Monster (21\")", price: 2650 }
    },
    basePrice: 530
  },
  {
    id: "piz-9",
    name: "Bihari Kabab Pizza",
    category: "pizzas",
    badge: "special",
    badgeLabel: "Desi Fusion 👑",
    desc: "Spicy tender Bihari kebab cuts, green chilies, pickled red onions, mint-coriander drizzle & cheese.",
    image: "assets/images/crown-crust.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 560 },
      medium: { label: "Medium (10\")", price: 1120 },
      large: { label: "Large (13\")", price: 1650 },
      monster: { label: "Monster (21\")", price: 2750 }
    },
    basePrice: 560
  },
  {
    id: "piz-10",
    name: "Cheesy Margherita Pizza",
    category: "pizzas",
    badge: "veg",
    badgeLabel: "Vegetarian 🧀",
    desc: "Double mozzarella cheese blend, Italian herb pizza sauce, sliced fresh tomatoes, and aromatic oregano.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 450 },
      medium: { label: "Medium (10\")", price: 890 },
      large: { label: "Large (13\")", price: 1350 },
      monster: { label: "Monster (21\")", price: 2290 }
    },
    basePrice: 450
  },
  {
    id: "piz-11",
    name: "Veggie Delight Pizza",
    category: "pizzas",
    badge: "veg",
    badgeLabel: "Fresh Veggie 🌽",
    desc: "Sweet golden corn, sliced button mushrooms, black olives, crisp bell peppers, tomatoes, and mozzarella.",
    image: "assets/images/hero-pizza.jpg",
    isPizza: true,
    sizes: {
      small: { label: "Small (7\")", price: 460 },
      medium: { label: "Medium (10\")", price: 910 },
      large: { label: "Large (13\")", price: 1380 },
      monster: { label: "Monster (21\")", price: 2320 }
    },
    basePrice: 460
  },

  // BURGERS
  {
    id: "bur-1",
    name: "John's Crispy Zinger Burger",
    category: "burgers",
    badge: "bestseller",
    badgeLabel: "Best Seller ⭐",
    desc: "Crispy hand-battered fried chicken thigh filet, fresh iceberg lettuce, secret house sauce on a toasted brioche bun.",
    image: "assets/images/burger.jpg",
    price: 420
  },
  {
    id: "bur-2",
    name: "Double Crunch Zinger with Cheese",
    category: "burgers",
    badge: "bestseller",
    badgeLabel: "Big Bite ⭐",
    desc: "Two crunchy fried chicken filets stacked high with double melted cheddar cheese and spicy mayo.",
    image: "assets/images/burger.jpg",
    price: 620
  },
  {
    id: "bur-3",
    name: "Smash Beef Beast Burger",
    category: "burgers",
    badge: "special",
    badgeLabel: "Gourmet Beef 👑",
    desc: "Double smashed beef patties seared on flat-top, American cheese, caramelized onions, pickles & smoky burger sauce.",
    image: "assets/images/burger.jpg",
    price: 680
  },
  {
    id: "bur-4",
    name: "Mardan Chapli Fusion Burger",
    category: "burgers",
    badge: "special",
    badgeLabel: "Mardan Pride 👑",
    desc: "Authentic spiced tender beef Chapli kebab patty, fresh tomatoes, mint yogurt drizzle, and onion rings.",
    image: "assets/images/burger.jpg",
    price: 450
  },
  {
    id: "bur-5",
    name: "Smoky BBQ Grilled Chicken Burger",
    category: "burgers",
    badge: null,
    badgeLabel: null,
    desc: "Juicy flame-grilled chicken breast glazed with hickory BBQ sauce, cheddar cheese, and crisp romaine lettuce.",
    image: "assets/images/burger.jpg",
    price: 480
  },
  {
    id: "bur-6",
    name: "The Tower Mega Burger",
    category: "burgers",
    badge: "bestseller",
    badgeLabel: "Monster Monster ⭐",
    desc: "Zinger filet + grilled beef patty + crispy golden hashbrown + melted double cheese + jalapeños.",
    image: "assets/images/burger.jpg",
    price: 790
  },

  // FRIES
  {
    id: "fry-1",
    name: "John's Loaded Beast Fries",
    category: "fries",
    badge: "special",
    badgeLabel: "Must Try 👑",
    desc: "Heaping platter of crispy fries topped with crispy chicken popcorn, melted cheddar, jalapenos & secret garlic drizzle.",
    image: "assets/images/loaded-fries.jpg",
    price: 580
  },
  {
    id: "fry-2",
    name: "Baked Pizza Fries Supreme",
    category: "fries",
    badge: "bestseller",
    badgeLabel: "Favorite ⭐",
    desc: "Golden fries baked in oven under rich pizza sauce, tandoori chicken chunks, sliced olives, and bubbly mozzarella.",
    image: "assets/images/loaded-fries.jpg",
    price: 520
  },
  {
    id: "fry-3",
    name: "Cheesy Melt Fries",
    category: "fries",
    badge: null,
    badgeLabel: null,
    desc: "Crispy straight-cut french fries generously smothered in warm, velvety melted cheddar cheese sauce.",
    image: "assets/images/loaded-fries.jpg",
    price: 390
  },
  {
    id: "fry-4",
    name: "Curly Twister Fries",
    category: "fries",
    badge: null,
    badgeLabel: null,
    desc: "Seasoned spiral curly fries fried to golden crunch with peri dip.",
    image: "assets/images/loaded-fries.jpg",
    price: 340
  },
  {
    id: "fry-5",
    name: "Masala Crinkle Fries",
    category: "fries",
    badge: "spicy",
    badgeLabel: "Chatpatta 🌶️",
    desc: "Crinkle-cut thick fries tossed in authentic Pakistani tangy chaat masala.",
    image: "assets/images/loaded-fries.jpg",
    price: 260
  },
  {
    id: "fry-6",
    name: "Classic Salted Crispy Fries",
    category: "fries",
    badge: null,
    badgeLabel: null,
    desc: "Fresh hot crispy fries sprinkled with sea salt. Served with ketchup.",
    image: "assets/images/loaded-fries.jpg",
    price: 220
  },

  // DRINKS & SHAKES
  {
    id: "drk-1",
    name: "Fresh Mint Margarita",
    category: "drinks",
    badge: "bestseller",
    badgeLabel: "Refreshing ⭐",
    desc: "Crushed ice, fresh mint sprigs, tangy lime juice, sugar syrup, and fizzy soda in a mason jar.",
    image: "assets/images/drinks.jpg",
    price: 280
  },
  {
    id: "drk-2",
    name: "Oreo Thick Milkshake",
    category: "drinks",
    badge: "bestseller",
    badgeLabel: "Creamy ⭐",
    desc: "Creamy thick dairy milkshake blended with whole Oreos, chocolate ganache swirl, and fluffy whipped cream.",
    image: "assets/images/drinks.jpg",
    price: 390
  },
  {
    id: "drk-3",
    name: "Cold Coffee with Vanilla Scoop",
    category: "drinks",
    badge: null,
    badgeLabel: null,
    desc: "Chilled espresso roast blended with whole milk and crowned with a scoop of premium vanilla ice cream.",
    image: "assets/images/drinks.jpg",
    price: 360
  },
  {
    id: "drk-4",
    name: "Nutella Brownie Shake",
    category: "drinks",
    badge: "special",
    badgeLabel: "Decadent 👑",
    desc: "Rich Nutella spread blended with fudge brownie chunks and chocolate cream drizzle.",
    image: "assets/images/drinks.jpg",
    price: 440
  },
  {
    id: "drk-5",
    name: "Peach Iced Tea",
    category: "drinks",
    badge: null,
    badgeLabel: null,
    desc: "Brewed black tea infused with sweet peach nectar and served over crystal ice cubes.",
    image: "assets/images/drinks.jpg",
    price: 260
  },
  {
    id: "drk-6",
    name: "Chilled Soft Drinks (Can 250ml)",
    category: "drinks",
    badge: null,
    badgeLabel: null,
    desc: "Your choice of Pepsi, 7Up, Mountain Dew, Mirinda, or Pakola Fizz.",
    image: "assets/images/drinks.jpg",
    price: 120
  },
  {
    id: "drk-7",
    name: "Soft Drink 1.5L Family Bottle",
    category: "drinks",
    badge: null,
    badgeLabel: null,
    desc: "Ice-cold 1.5L bottle (Pepsi / 7Up / Mountain Dew).",
    image: "assets/images/drinks.jpg",
    price: 260
  },

  // SAUCES & DIPS
  {
    id: "sau-1",
    name: "John's Secret Cafe Sauce",
    category: "sauces",
    badge: "special",
    badgeLabel: "Signature 👑",
    desc: "Our legendary house sauce! Tangy, creamy, lightly spiced secret recipe dip that goes with everything.",
    image: "assets/images/sauces.jpg",
    price: 80
  },
  {
    id: "sau-2",
    name: "Creamy Garlic Mayo Dip",
    category: "sauces",
    badge: "bestseller",
    badgeLabel: "Favorite ⭐",
    desc: "Rich roasted garlic infused mayonnaise with fresh parsley and Italian herbs.",
    image: "assets/images/sauces.jpg",
    price: 70
  },
  {
    id: "sau-3",
    name: "Fiery Peri Peri Chili Dip",
    category: "sauces",
    badge: "spicy",
    badgeLabel: "Hot 🌶️",
    desc: "African birds-eye chili, lemon juice, smoked paprika, and herb dip with a fiery kick.",
    image: "assets/images/sauces.jpg",
    price: 80
  },
  {
    id: "sau-4",
    name: "Honey Mustard Glaze Dip",
    category: "sauces",
    badge: null,
    badgeLabel: null,
    desc: "Smooth Dijon mustard balanced with golden organic honey for crispy strips and burgers.",
    image: "assets/images/sauces.jpg",
    price: 80
  },
  {
    id: "sau-5",
    name: "Smoky Chipotle BBQ Sauce",
    category: "sauces",
    badge: null,
    badgeLabel: null,
    desc: "Sweet and smoky hickory barbecue dip with a hint of chipotle warmth.",
    image: "assets/images/sauces.jpg",
    price: 80
  },
  {
    id: "sau-6",
    name: "Warm Cheddar Cheese Shot",
    category: "sauces",
    badge: "special",
    badgeLabel: "Pure Melt 🧀",
    desc: "Pipings hot cup of creamy melted cheddar cheese dip for crusts and fries.",
    image: "assets/images/sauces.jpg",
    price: 120
  },

  // DEALS
  {
    id: "deal-1",
    name: "Deal 1: Solo Fast Feast",
    category: "deals",
    badge: "bestseller",
    badgeLabel: "Save ₨100 ⭐",
    desc: "1 Crispy Zinger Burger + 1 Regular Salted Fries + 1 Chilled Soft Drink Can (250ml).",
    image: "assets/images/burger.jpg",
    price: 699,
    dealItems: ["1x Crispy Zinger Burger", "1x Regular Salted Fries", "1x Soft Drink Can (250ml)"]
  },
  {
    id: "deal-2",
    name: "Deal 2: Duo Pizza Party",
    category: "deals",
    badge: "bestseller",
    badgeLabel: "Save ₨220 ⭐",
    desc: "1 Medium Pizza (Any Flavor) + 1 Crispy Zinger Burger + 1 500ml Chilled Drink.",
    image: "assets/images/hero-pizza.jpg",
    price: 1450,
    dealItems: ["1x Medium Pizza (10\")", "1x Crispy Zinger Burger", "1x 500ml Drink"]
  },
  {
    id: "deal-3",
    name: "Deal 3: Family Mega Bonanza",
    category: "deals",
    badge: "special",
    badgeLabel: "Best Value 👑",
    desc: "1 Large Pizza (Any Flavor) + 1 Giant Loaded Beast Fries + 2 Zinger Burgers + 1.5L Family Drink.",
    image: "assets/images/crown-crust.jpg",
    price: 2850,
    dealItems: ["1x Large Pizza (13\")", "1x Loaded Beast Fries", "2x Zinger Burgers", "1x 1.5L Drink"]
  },
  {
    id: "deal-4",
    name: "Deal 4: Midnight Monster Feast",
    category: "deals",
    badge: "special",
    badgeLabel: "Save ₨500 👑",
    desc: "1 Monster 21-Inch Giant Pizza + 2 Signature Secret Dips + 1.5L Cold Drink. Feeds 6-8 people!",
    image: "assets/images/hero-pizza.jpg",
    price: 2890,
    dealItems: ["1x Monster 21\" Giant Pizza", "2x Signature Secret Dips", "1x 1.5L Family Drink"]
  }
];

// Available Crust Options
const CRUST_OPTIONS = [
  { id: "crust-hand", name: "Original Hand-Tossed", price: 0 },
  { id: "crust-stuffed", name: "Cheesy Stuffed Crust", price: 250 },
  { id: "crust-crown", name: "Signature Crown Crust", price: 350 },
  { id: "crust-thin", name: "Crispy Thin Italian", price: 0 }
];

// Pizza Extra Add-ons
const PIZZA_ADDONS = [
  { id: "add-cheese", name: "Extra Mozzarella Cheese Blast", price: 180 },
  { id: "add-jalapenos", name: "Spicy Pickled Jalapeños", price: 80 },
  { id: "add-dip", name: "John's Secret Sauce Dip Ramekin", price: 70 },
  { id: "add-olives", name: "Extra Black Olives & Mushrooms", price: 90 }
];

// Vouchers State
const VOUCHERS = {
  "MARDAN10": { discountPercent: 10, label: "10% Off Mardan Special" },
  "JHONS15": { discountPercent: 15, label: "15% Off Chef's Welcome" }
};

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem("pj_cart") || "[]");
let currentCategory = "all";
let searchQuery = "";
let appliedVoucher = null;
let currentCustomizingItem = null;
let selectedPizzaSize = "medium";
let selectedPizzaCrust = "crust-hand";
let selectedAddons = [];
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
    // Exclude standalone deals from products grid (they have their own section)
    if (item.category === "deals" && currentCategory !== "deals") {
      return false;
    }

    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-pizza-slice" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 8px;">No Flavors Found</h3>
        <p style="color: var(--text-muted);">Try searching for "Tikka", "Fajita", "Zinger", "Loaded", or clear the filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const badgeHtml = item.badgeLabel ? `
      <span class="badge-pill badge-${item.badge}">${item.badgeLabel}</span>
    ` : '';

    const priceDisplay = item.isPizza 
      ? `₨ ${item.basePrice.toLocaleString()} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-dim);">(from)</span>`
      : `₨ ${item.price.toLocaleString()}`;

    const buttonLabel = item.isPizza ? `Customize <i class="fa-solid fa-sliders"></i>` : `Add to Cart <i class="fa-solid fa-plus"></i>`;

    return `
      <div class="food-card" data-id="${item.id}">
        <div class="food-card-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${badgeHtml}
        </div>
        <div class="food-card-body">
          <span class="food-card-category">${item.category}</span>
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

  const deals = MENU_ITEMS.filter(item => item.category === "deals");

  dealsGrid.innerHTML = deals.map(deal => {
    const itemsList = (deal.dealItems || []).map(i => `
      <li><i class="fa-solid fa-check"></i> ${i}</li>
    `).join("");

    return `
      <div class="deal-card">
        <span class="deal-badge">${deal.badgeLabel || 'HOT DEAL'}</span>
        <span class="deal-tag">Combo Offer</span>
        <h3 class="deal-title">${deal.name}</h3>
        <ul class="deal-items-list">
          ${itemsList}
        </ul>
        <div class="deal-footer">
          <div class="deal-pricing">
            <span class="old-price">₨ ${(deal.price + 200).toLocaleString()}</span>
            <div class="final-price">₨ ${deal.price.toLocaleString()}</div>
          </div>
          <button class="btn-add-cart" onclick="addDirectToCart('${deal.id}')">
            Order Combo <i class="fa-solid fa-cart-shopping"></i>
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

  if (item.isPizza) {
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
      metaText: item.category.toUpperCase()
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
        <h3>Your Cart is Empty</h3>
        <p>Explore our hot pizzas, smash burgers, and loaded fries in Mardan.</p>
        <button class="btn-primary" onclick="closeCart()" style="padding: 10px 24px; font-size: 0.9rem;">
          Browse Menu
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₨ 0";
    if (deliveryEl) deliveryEl.textContent = "₨ 0";
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
  const delivery = subtotal >= CAFE_INFO.freeDeliveryThreshold || subtotal === 0 ? 0 : CAFE_INFO.deliveryFee;
  
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
    deliveryEl.innerHTML = delivery === 0 
      ? `<span style="color: #25d366; font-weight: 700;">FREE</span>` 
      : `₨ ${delivery.toLocaleString()}`;
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
  showToast("Item removed from cart");
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
   PIZZA CUSTOMIZATION MODAL ENGINE
   ========================================================================== */
function openCustomModal(item) {
  currentCustomizingItem = item;
  selectedPizzaSize = item.sizes.medium ? "medium" : Object.keys(item.sizes)[0];
  selectedPizzaCrust = "crust-hand";
  selectedAddons = [];

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

  // Render Sizes
  sizeGrid.innerHTML = Object.entries(item.sizes).map(([key, data]) => `
    <div class="custom-option-label ${key === selectedPizzaSize ? 'selected' : ''}" onclick="selectPizzaSize('${key}')">
      <span class="opt-name">${data.label}</span>
      <span class="opt-price">₨ ${data.price.toLocaleString()}</span>
    </div>
  `).join("");

  // Render Crusts
  crustGrid.innerHTML = CRUST_OPTIONS.map(c => `
    <div class="custom-option-label ${c.id === selectedPizzaCrust ? 'selected' : ''}" onclick="selectPizzaCrust('${c.id}')">
      <span class="opt-name">${c.name}</span>
      <span class="opt-price">${c.price > 0 ? `+₨ ${c.price}` : 'Free'}</span>
    </div>
  `).join("");

  // Render Add-ons
  addonGrid.innerHTML = PIZZA_ADDONS.map(add => `
    <div class="custom-option-label ${selectedAddons.includes(add.id) ? 'selected' : ''}" onclick="togglePizzaAddon('${add.id}')">
      <span class="opt-name">${add.name}</span>
      <span class="opt-price">+₨ ${add.price}</span>
    </div>
  `).join("");

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

function togglePizzaAddon(addonId) {
  if (selectedAddons.includes(addonId)) {
    selectedAddons = selectedAddons.filter(id => id !== addonId);
  } else {
    selectedAddons.push(addonId);
  }

  document.querySelectorAll("#customModalAddonOptions .custom-option-label").forEach((el, index) => {
    const id = PIZZA_ADDONS[index].id;
    el.classList.toggle("selected", selectedAddons.includes(id));
  });
  updateCustomModalPrice();
}

function calculateCustomPizzaPrice() {
  if (!currentCustomizingItem) return 0;
  const sizePrice = currentCustomizingItem.sizes[selectedPizzaSize]?.price || currentCustomizingItem.basePrice;
  const crustPrice = CRUST_OPTIONS.find(c => c.id === selectedPizzaCrust)?.price || 0;
  const addonsPrice = selectedAddons.reduce((sum, addId) => {
    const addObj = PIZZA_ADDONS.find(a => a.id === addId);
    return sum + (addObj ? addObj.price : 0);
  }, 0);

  return sizePrice + crustPrice + addonsPrice;
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
  const addonsList = selectedAddons.map(id => PIZZA_ADDONS.find(a => a.id === id)?.name).filter(Boolean);

  let metaParts = [sizeObj.label, crustObj.name];
  if (addonsList.length > 0) {
    metaParts.push(addonsList.join(", "));
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
  const delivery = orderDeliveryType === "takeaway" || subtotal >= CAFE_INFO.freeDeliveryThreshold ? 0 : CAFE_INFO.deliveryFee;
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

  // Build clean Pakistani WhatsApp message
  let msg = `*🍕 NEW ONLINE ORDER - PIZZA JHON'S MARDAN*\n`;
  msg += `*Order ID:* #${orderId}\n`;
  msg += `*Customer:* ${name}\n`;
  msg += `*Contact:* ${phone}\n`;
  msg += `*Type:* ${orderDeliveryType === "delivery" ? "🚀 Home Delivery" : "🛍️ Takeaway / Dine-in"}\n`;
  
  if (orderDeliveryType === "delivery") {
    msg += `*Area:* ${area}, Mardan\n`;
    msg += `*Address:* ${address}\n`;
  }
  
  msg += `*Payment:* ${payment}\n`;
  if (notes) msg += `*Special Note:* ${notes}\n`;

  msg += `\n*📦 ORDER ITEMS:*\n`;
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}* x${item.qty}\n`;
    if (item.metaText) msg += `   ↳ _${item.metaText}_\n`;
    msg += `   ↳ ₨ ${(item.price * item.qty).toLocaleString()}\n`;
  });

  msg += `\n*💰 BILL SUMMARY:*\n`;
  msg += `Subtotal: ₨ ${subtotal.toLocaleString()}\n`;
  if (discount > 0) msg += `Discount: -₨ ${discount.toLocaleString()}\n`;
  msg += `Delivery Fee: ${delivery === 0 ? 'FREE' : `₨ ${delivery.toLocaleString()}`}\n`;
  msg += `*Total Payable: ₨ ${grandTotal.toLocaleString()}*\n`;
  msg += `\n📍 _Order submitted via Pizza Jhon's Mardan Online Menu_`;

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
  showToast("Order placed successfully! Kitchen preparing... 🔥");
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
