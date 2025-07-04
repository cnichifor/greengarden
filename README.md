# GreenGarden

A vanilla JavaScript, HTML, and CSS front-end online shop showcasing a plant nursery-inspired e-commerce experience.

---

## Project Overview

GreenGarden is a static web application that simulates an online plant shop. It includes product listings, a shopping cart flow, user authentication mockups, and informational pages, all built with plain HTML, CSS, and JavaScript—no frameworks.

---

## Features

* **Homepage (index.html):**

  * Hero banner with featured plants
  * Dynamic category navigation
* **Product Listing:**

  * Grid view of products with image, name, price
  * Filters by price and category
  * “Add to Cart” button updates cart icon count in real time
* **Product Detail (Productpage folder):**

  * Detailed description, multiple images carousel
  * Quantity selector and “Buy Now” action
* **Shopping Flow:**

  * **BuyNow\.html**: mock checkout page with form fields for address/payment
  * **Cart functionality** persisted in `localStorage`
* **User Authentication Mockups:**

  * **Login.html** and **.Ro/Login.html** (Romanian version)
* **Additional Pages:**

  * **AboutUs**, **Business**, **SF**, **GT**, **FC**: static informational pages
* **Localization Support:**

  * `.Ro` folder contains Romanian translations of key pages
* **Assets & Styling:**

  * Custom fonts (in `fonts/`)
  * Responsive CSS in `style/` folder
  * Vanilla JS in `script/` folder to handle interactivity

---

## Folder Structure

```
├── fonts/            # Custom web fonts
├── img/              # Product and UI images
├── script/           # Vanilla JS modules for cart, carousel, filters
├── style/            # CSS files (layout, typography, responsive breakpoints)
├── .Ro/              # Romanian versions of HTML pages
├── AboutUs/          # Company information pages
├── Business/         # B2B info pages
├── Buynow/           # Checkout mockup pages
├── FC/               # FAQ & Contact pages
├── GT/               # Gift & Tools promotion pages
├── Home/             # Homepage templates
├── Login/            # Authentication mockups
├── Productpage/      # Individual product detail pages
├── SF/               # Special features pages
├── index.html        # Main entry point
├── Link figma.txt    # Figma design link
├── Raport.pdf        # Project report and wireframes
└── .gitattributes
```

---

## Getting Started

No build step is required—just open `index.html` in your browser or host the folder on any static file server.

```bash
# Using Python HTTP server (optional)
python3 -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

---

## Technologies Used

* **HTML5** semantic markup
* **CSS3** Flexbox & Grid for responsive layouts
* **Vanilla JavaScript** (ES6 modules)
* **LocalStorage** for cart persistence

---

## Potential Improvements

* **Accessibility:** Add ARIA roles and ensure keyboard navigation
* **Performance:** Optimize images and implement lazy loading
* **Modular CSS:** Use variables (CSS custom properties) or preprocessors (Sass)
* **State Management:** Introduce a lightweight bundler or framework (e.g., Vite + Vue/React)
* **Backend Integration:** Connect to a real API for products and orders
* **Unit Testing:** Add Jest for JS logic tests

---

## License

This project is released under the MIT License. Feel free to copy, modify, and distribute.
