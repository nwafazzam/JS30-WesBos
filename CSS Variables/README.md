# Scoped CSS Variables and JS (JS30 - Project 03)

A small project from Wes Bos's **JavaScript 30** course that demonstrates how to dynamically update CSS Custom Properties (CSS Variables) using JavaScript and live input controls.

## 🚀 Features

* **Dynamic CSS Variables:** Updates image padding, blur effects, and brand color instantly as the user interacts with the controls.
* **Range Inputs & Color Picker:** Utilizes custom-styled HTML range sliders and a native color picker.
* **Modern CSS Styling:** Implements custom styling for range tracks and thumbs across different browser engines, alongside CSS variables defined in the `:root` pseudo-class.

## 🛠️ Technologies Used

* **HTML5:** Semantic document structure (`<header>`, `<main>`, `<article>`, `<section>`, etc.) and responsive controls.
* **CSS3:** Flexbox/Layout, CSS Custom Properties (`--variable`), and pseudo-elements (`::-webkit-slider-thumb`, `::-moz-range-thumb`).
* **Vanilla JavaScript (ES6+):** DOM manipulation, `querySelectorAll`, `dataset` attributes, and event listeners (`input` event).

## ⚙️ How It Works

1. The JavaScript file listens for `input` events on all controls inside the `.controls` container.
2. It captures the current value of the input and appends the appropriate sizing suffix (such as `px`) stored via `data-sizing`.
3. It updates the document's root style properties dynamically using `document.documentElement.style.setProperty()`.

## 📦 Getting Started

1. Clone or download the repository.
2. Open `index.html` directly in your web browser to view and interact with the project.
