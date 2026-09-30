# 🍔 Food Ordering Website

A responsive food ordering website with a dynamic menu and a slide-in shopping cart, built with HTML, CSS and vanilla JavaScript (no frameworks).

🔗 **Live Demo:** [https://fooddelivery-lovat-eta.vercel.app] (https://fooddelivery-lovat-eta.vercel.app/)

![Preview]<p align="center">
  <img src="assests/hero-page.jpeg" width="400">
</p>
<p align="center">
  <img src="assests/app-page.jpeg" width="400">
</p>

## 📖 About the Project

I built this project to strengthen my front-end fundamentals and practise building a real, working interface from scratch. The goal was to understand how a shopping cart works under the hood: fetching data, rendering it to the page, and keeping the UI and the totals in sync, all without relying on a framework.

## ✨ Features

- **Responsive design** for desktop, tablet and mobile
- **Dynamic menu**: products are loaded from `products.json` using the Fetch API
- **Shopping cart sidebar**
  - Add items to the cart
  - Increase or decrease quantity
  - Item slides out and is removed when quantity drops below 1
  - Live total price and cart count badge
  - Duplicate items are blocked with an alert
- **Mobile navigation** with a hamburger menu and icon toggle
- **Customer reviews slider** built with Swiper.js (looping, arrow navigation)
- **Animations**: hero slide-in effects and hover effects on food images
- Consistent colour theme using CSS variables

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 (Flexbox, Grid, Animations, Media Queries) | Styling and responsiveness |
| JavaScript (ES6) | Cart logic and DOM manipulation |
| [Swiper.js](https://swiperjs.com/) | Reviews slider |
| [Font Awesome](https://fontawesome.com/) | Icons |
| Google Fonts | Typography |
| Vercel | Deployment |

## 🎯 What I Learned

- Fetching and rendering JSON data with the Fetch API
- Creating and updating DOM elements dynamically with JavaScript
- Managing state (cart items, quantities, totals) without a framework
- Building responsive layouts with Flexbox, Grid and media queries
- CSS animations and transitions
- Using third-party libraries (Swiper.js, Font Awesome)
- Version control with Git and GitHub, and deploying a site on Vercel

## 📁 Project Structure

```
├── index.html
├── styles.css
├── index.js
├── products.json
├── assests/          # product and hero images
└── README.md
```

## 👤 Author

**Kamlesh Rai**
B.Tech Student (3rd Year)

- GitHub: [@dev-cret](https://github.com/dev-cret)
- LinkedIn: [Kamlesh Rai](https://www.linkedin.com/in/kamlesh-rai-8a4a25412)
