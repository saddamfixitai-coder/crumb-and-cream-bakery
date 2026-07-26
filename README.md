# Crumb & Cream Bakery Ecommerce Website

A modern, responsive Pakistani bakery ecommerce frontend.

## ✅ Features

- ✅ Responsive mobile-first design
- ✅ Product categories and filtering
- ✅ Shopping cart with localStorage persistence
- ✅ Pakistani Rupee pricing
- ✅ Contact form UI
- ✅ Modern semantic HTML/CSS/JavaScript
- ✅ No inline JavaScript
- ✅ No dangerous HTML injection from user input
- ✅ Ready for GitHub Pages deployment
- ✅ Proper folder structure (css/, js/, images/)
- ✅ Professional image naming (no spaces)
- ✅ Error handling with fallback emojis

## Project Structure

```text
crumb-and-cream-bakery/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── images/
    ├── chocolate-cake.jpg
    ├── red-velvet-cake.jpg
    ├── chicken-patties.jpg
    ├── butter-croissant.jpg
    ├── chocolate-cookies.jpg
    ├── nankhatai.jpg
    ├── gulab-jamun-cheesecake.jpg
    └── cinnamon-rolls.jpg
```

## 🚀 Quick Start

### Run Locally

Open `index.html` in a browser, or use a local server:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

### Upload to GitHub

```bash
git init
git add .
git commit -m "Initial bakery ecommerce website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 📄 GitHub Pages Deployment

1. Open the repository on GitHub
2. Go to **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Select `main` branch and `/root` folder
5. Click **Save**
6. Your site will be live at: `https://USERNAME.github.io/crumb-and-cream-bakery`

## ⚠️ Before Taking Real Orders

This project is a frontend demo. For a production ecommerce website:

- ✅ Add a secure backend/API
- ✅ Never store payment card data yourself
- ✅ Use a trusted payment provider (Stripe, PayPal, etc.)
- ✅ Validate all data server-side
- ✅ Store secrets only in server environment variables
- ✅ Add authentication and authorization if an admin panel is added
- ✅ Add a real database for products and orders
- ✅ Add server-side order validation
- ✅ Configure HTTPS and security headers
- ✅ Add a real email service for contact/order notifications

## 🎨 Customization

### Update Contact Information

Edit these in `index.html`:

- Bakery name (line 19)
- Phone number (line 105)
- Email address (line 106)
- Location (line 104)

### Update Products & Prices

Edit `js/app.js` (lines 4-69):

```javascript
const products = [
  {
    id: 1,
    name: "Product Name",
    category: "cakes", // cakes, pastries, cookies, or desi
    price: 2499,
    image: "images/product-name.jpg",
    description: "Product description here."
  },
  // ... more products
];
```

### Add Real Product Images

1. Place your bakery product images in the `images/` folder
2. Name them clearly (e.g., `chocolate-cake.jpg`)
3. Update the image paths in `js/app.js`
4. Use WebP or optimized JPEG formats for best performance

### Customize Colors

Edit the CSS variables in `css/styles.css` (line 2):

```css
:root{
  --ink:#231d1a;        /* Dark text color */
  --muted:#756b65;      /* Muted text color */
  --cream:#fffaf5;      /* Background color */
  --peach:#f7e2d2;      /* Accent background */
  --accent:#b85c38;     /* Primary accent color */
  --dark:#2f211c;       /* Dark background */
  --line:#eadfd8;       /* Border color */
}
```

## 📞 Support

For questions or issues:
- Check the commit history on GitHub
- Review the code comments
- Test with real bakery images

## 📝 License

Free to use and modify.

---

**Made with ❤️ for Pakistani bakeries**