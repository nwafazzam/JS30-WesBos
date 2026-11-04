# 02 - JS + CSS Clock ⏰

An interactive analog clock built using vanilla JavaScript and CSS, created as part of **Wes Bos's 30-Day Vanilla JS Challenge (JavaScript 30)**.

This project displays a working clock that synchronizes with the user's local system time, updating the positions of the second, minute, and hour hands in real-time.

---

## 🚀 Features

* **Real-time Synchronization:** Fetches the current system time dynamically using JavaScript's `Date` object and updates every second via `setInterval`.
* **Smooth Hand Transitions:** Utilizes custom CSS `transition-timing-function` with `cubic-bezier` to create a spring-like bouncing effect as the clock hands tick.
* **Smart Glitch Prevention:** Includes conditional checks to prevent backward spinning glitches when hands reset from 59 to 0 seconds/minutes.
* **Clean CSS Styling:** Styled using modern CSS features including linear gradients, box shadows, Flexbox, and absolute positioning to construct an aesthetic analog clock face.

---

## 🛠️ Tech Stack

* **HTML5:** Structural markup for the clock container and hands.
* **CSS3:** Advanced styling, circular border-radius, box-shadow depth effects, and rotation transform origins.
* **JavaScript (Vanilla JS):**
  * `Date` object methods (`getSeconds`, `getMinutes`, `getHours`).
  * DOM manipulation (`document.querySelector`).
  * Timing events (`setInterval`).
  * Dynamic inline style updates for CSS `transform` and `transition`.

---

## 🧠 What I Learned

1. **Transform Origin (`transform-origin`):** Manipulating the rotation pivot point to ensure clock hands rotate correctly from their base (right edge) rather than their center.
2. **Degree Calculations:** Converting temporal units (seconds, minutes, hours) into degrees (`360deg`) offset by a baseline `90deg` initialization.
3. **Time Interval Management:** Using `setInterval` to execute time-checking functions continuously at 1-second intervals.

---

## 📁 Project Structure

```text
02 - JS + CSS Clock/
├── index.html
└── style.css
```
