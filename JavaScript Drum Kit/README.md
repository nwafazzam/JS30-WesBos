# 01 - JavaScript Drum Kit 🥁

A dynamic and interactive web-based Drum Kit created as part of **Wes Bos's 30-Day Vanilla JS Challenge (JavaScript 30)**.

This project allows users to play various drum sounds by pressing designated keys on the keyboard (`A, S, D, F, G, H, J, K, L`) or by clicking directly on the drum pads.

---

## 🚀 Features

* **Dual Input Support:** Trigger sound effects using either keyboard keys or mouse clicks.
* **Instant Sound Playback:** Uses `audio.currentTime = 0` to rewind sound files instantly, allowing rapid consecutive key presses.
* **Smooth Visual Feedback:** Adds a `.clicked-style` class when triggered and removes it cleanly using the `transitionend` event listener.
* **Dynamic Animated Background:** Smooth background color transition powered by CSS `@keyframes`.
* **Responsive Layout:** Adaptive layout styled for modern desktop, tablet, and mobile displays using Flexbox and CSS Media Queries.

---

## 🛠️ Tech Stack

* **HTML5:** Structural markup, `<audio>` elements, and custom `data-key` attributes.
* **CSS3:** Keyframe animations, Flexbox layout, dynamic scaling effects, and media queries.
* **JavaScript (Vanilla JS):**
  * Event listeners for `keydown`, `click`, and `transitionend`.
  * DOM selection using `querySelector` and `querySelectorAll`.
  * HTML5 Audio API manipulation.

---

## 🧠 What I Learned

1. **Working with `data-*` Attributes:** Utilizing `dataset.key` to map HTML UI elements cleanly to their corresponding `<audio>` tracks.
2. **Audio Control via JS:** Resetting audio track progress to zero on every input trigger for instantaneous playback.
3. **Handling Animations via CSS Transitions:** Listening for the `transitionend` event to handle class removal dynamically, avoiding unreliable `setTimeout` timers.

---

## 📁 Project Structure

```text
01 - Drum Kit/
├── index.html
├── style.css
└── sounds/
```
