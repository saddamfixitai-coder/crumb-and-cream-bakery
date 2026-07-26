# Crumb & Cream Bakery Ecommerce Website

A modern, responsive Pakistani bakery ecommerce frontend.

## Features

- Responsive mobile-first design
- Product categories and filtering
- Shopping cart with localStorage persistence
- Pakistani Rupee pricing
- Contact form UI
- Modern semantic HTML/CSS/JavaScript
- No inline JavaScript
- No dangerous HTML injection from user input
- Ready for GitHub Pages deployment

## Project Structure

```text
bakery-ecommerce/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── app.js
```

## Run Locally

Open `index.html` in a browser, or use a local server:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Upload to GitHub

```bash
git init
git add .
git commit -m "Initial bakery ecommerce website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## GitHub Pages

1. Open the repository on GitHub.
2. Go to Settings → Pages.
3. Select Deploy from a branch.
4. Select `main` and `/root`.
5. Save.

## Before Taking Real Orders

This project is a frontend demo. For a production ecommerce website:

- Add a secure backend/API.
- Never store payment card data yourself.
- Use a trusted payment provider.
- Validate all data server-side.
- Store secrets only in server environment variables.
- Add authentication and authorization if an admin panel is added.
- Add a real database for products and orders.
- Add server-side order validation.
- Configure HTTPS and security headers.
- Add a real email service for contact/order notifications.

## Customization

Update these in `index.html`:

- Bakery name
- Phone number
- Email address
- Location

Update products and prices in:

```text
js/app.js
```

Replace the emoji product visuals with optimized WebP/JPEG images when you have real bakery photography.
