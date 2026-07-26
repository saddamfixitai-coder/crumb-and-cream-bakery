(() => {
  "use strict";

  const products = [
    {
      id: 1,
      name: "Classic Chocolate Cake",
      category: "cakes",
      price: 2499,
      image: "🍰",
      description: "Rich chocolate sponge with smooth cream."
    },
    {
      id: 2,
      name: "Red Velvet Cake",
      category: "cakes",
      price: 2999,
      image: "🍰",
      description: "Soft red velvet layers with cream cheese frosting."
    },
    {
      id: 3,
      name: "Chicken Patties",
      category: "pastries",
      price: 180,
      image: "🥐",
      description: "Flaky pastry filled with savoury chicken."
    },
    {
      id: 4,
      name: "Butter Croissant",
      category: "pastries",
      price: 220,
      image: "🥐",
      description: "Golden, flaky and baked fresh daily."
    },
    {
      id: 5,
      name: "Chocolate Chip Cookies",
      category: "cookies",
      price: 650,
      image: "🍪",
      description: "A box of soft, buttery chocolate chip cookies."
    },
    {
      id: 6,
      name: "Nankhatai Box",
      category: "desi",
      price: 550,
      image: "🍪",
      description: "Traditional Pakistani melt-in-your-mouth biscuits."
    },
    {
      id: 7,
      name: "Gulab Jamun Cheesecake",
      category: "desi",
      price: 2899,
      image: "🍰",
      description: "A modern cheesecake with a desi twist."
    },
    {
      id: 8,
      name: "Cinnamon Rolls",
      category: "pastries",
      price: 850,
      image: "🥐",
      description: "Soft rolls with cinnamon sugar and glaze."
    }
  ];

  const state = {
    cart: JSON.parse(localStorage.getItem("crumb_cart") || "[]")
  };

  const $ = (selector) => document.querySelector(selector);
  const productGrid = $("#productGrid");
  const cartItems = $("#cartItems");
  const cartCount = $("#cartCount");
  const cartTotal = $("#cartTotal");
  const cartDrawer = $("#cartDrawer");
  const overlay = $("#overlay");

  const money = (value) => `Rs. ${value.toLocaleString("en-PK")}`;

  function saveCart() {
    localStorage.setItem("crumb_cart", JSON.stringify(state.cart));
  }

  function renderProducts(category = "all") {
    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);

    productGrid.innerHTML = filtered
      .map(
        (p) => `
        <article class="product-card">
          <div class="product-image">
            <span style="font-size: 3rem; display: flex; align-items: center; justify-content: center; height: 100%;">
              ${p.image}
            </span>
          </div>

          <div class="product-info">
            <h3>${p.name}</h3>
            <p>${p.description}</p>

            <div class="product-bottom">
              <span class="price">${money(p.price)}</span>

              <button 
                class="add-button" 
                data-add="${p.id}" 
                aria-label="Add ${p.name} to cart"
              >
                +
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  function renderCart() {
    const totalItems = state.cart.reduce(
      (sum, item) => sum + item.qty,
      0
    );

    const total = state.cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    cartCount.textContent = totalItems;
    cartTotal.textContent = money(total);

    if (!state.cart.length) {
      cartItems.innerHTML =
        '<div class="empty-cart">Your cart is waiting for something delicious 🍪</div>';
      return;
    }

    cartItems.innerHTML = state.cart
      .map(
        (item) => `
        <div class="cart-item">

          <div class="cart-item-icon">
            <span style="font-size: 2rem;">
              ${item.image}
            </span>
          </div>

          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <small>${money(item.price)} each</small>

            <div class="quantity-controls">
              <button data-decrease="${item.id}">−</button>
              <span>${item.qty}</span>
              <button data-increase="${item.id}">+</button>
              <button data-remove="${item.id}">×</button>
            </div>
          </div>

        </div>
      `
      )
      .join("");
  }

  function addToCart(id) {
    const product = products.find((p) => p.id === id);
    const existing = state.cart.find((item) => item.id === id);

    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ ...product, qty: 1 });
    }

    saveCart();
    renderCart();
  }

  function updateQuantity(id, amount) {
    const item = state.cart.find((i) => i.id === id);

    if (!item) return;

    item.qty += amount;

    if (item.qty <= 0) {
      state.cart = state.cart.filter((i) => i.id !== id);
    }

    saveCart();
    renderCart();
  }

  function openCart() {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
    overlay.classList.add("show");
  }

  function closeCart() {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");
    overlay.classList.remove("show");
  }

  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");

    if (add) {
      addToCart(Number(add.dataset.add));
      openCart();
    }

    const inc = event.target.closest("[data-increase]");

    if (inc) {
      updateQuantity(Number(inc.dataset.increase), 1);
    }

    const dec = event.target.closest("[data-decrease]");

    if (dec) {
      updateQuantity(Number(dec.dataset.decrease), -1);
    }

    const remove = event.target.closest("[data-remove]");

    if (remove) {
      state.cart = state.cart.filter(
        (item) => item.id !== Number(remove.dataset.remove)
      );

      saveCart();
      renderCart();
    }
  });

  $("#filters").addEventListener("click", (event) => {
    const button = event.target.closest(".filter");

    if (!button) return;

    document
      .querySelectorAll(".filter")
      .forEach((b) => b.classList.remove("active"));

    button.classList.add("active");

    renderProducts(button.dataset.category);
  });

  $("#cartButton").addEventListener("click", openCart);

  $("#closeCart").addEventListener("click", closeCart);

  overlay.addEventListener("click", closeCart);

  $("#menuToggle").addEventListener("click", () => {
    $("#mainNav").classList.toggle("open");
  });

  $("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    $("#formMessage").textContent =
      "Thanks! Your message has been received. We will contact you soon.";

    event.target.reset();
  });

  $("#checkoutButton").addEventListener("click", () => {
    if (!state.cart.length) {
      alert("Your cart is empty.");
      return;
    }

    alert(
      "Demo order flow. Connect a backend and payment gateway for real orders."
    );
  });

  renderProducts();
  renderCart();
})();