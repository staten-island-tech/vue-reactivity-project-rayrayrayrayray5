# Feedback – Weiming

You built a McDonald's menu ordering app with a shopping cart that shows quantity controls and a running total. The concept is great and you're close — but three critical pieces are unfinished, which will cause the app to crash when the user tries to decrease quantity or remove items.

## Vite CLI – Mastery
`package.json` correctly configures Vite with `@vitejs/plugin-vue` and `vue` / `vue-router` as dependencies.

## Iteration in Vue (v-for) – Mastery
You use `v-for` with `:key` correctly in two places:
```html
<div v-for="item in menuItems" :key="item.id" class="menu-item">
<div v-for="item in cart" :key="item.id" class="cart-item">
```
Both use numeric IDs as keys. Well done.

## Data Binding – Mastery
`menuItems` and `cart` are both `ref` arrays, and data is displayed with `{{ }}` throughout:
```html
<h3>{{ item.name }}</h3>
<p>${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
```
The `:disabled` pattern and `v-if="cart.length === 0"` conditional are nice touches.

## Click Methods – Not Yet
There are three critical bugs:

**Bug 1 & 2:** `decreasequantity` and `removefromcart` are declared but never implemented:
```js
const decreasequantity   // ❌ declared but undefined
const removefromcart     // ❌ declared but undefined
```
Clicking the `-` or `Remove` buttons will throw `TypeError: decreasequantity is not a function`.

Fix them:
```js
const decreasequantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removefromcart(item.id)
  }
}

const removefromcart = (id) => {
  cart.value = cart.value.filter(i => i.id !== id)
}
```

**Bug 3:** `totalPrice` is used in the template but never defined:
```html
<h3>Total: ${{ totalPrice.toFixed(2) }}</h3>  <!-- ❌ totalPrice is undefined -->
```
Add a computed value or calculate it inline:
```js
import { ref, computed } from 'vue'
const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
```

## Reactive UI – Approaching
The `addtocart` function and `item.quantity++` work correctly — adding items and incrementing does update the UI. But decrementing and removing crash the app, and the total never shows.

## Semantic HTML – Approaching
The menu and cart items use `<h3>`, `<h4>`, and `<p>` tags appropriately. The main improvement would be wrapping them in `<ul>` / `<li>` instead of generic `<div>` elements.

## BEM CSS – Not Yet
Class names `.menu-item` and `.cart-item` are descriptive but not BEM. BEM would look like:
- `.menu` (block)
- `.menu__item` (element)
- `.cart` (block)
- `.cart__item` (element)
- `.cart__item--out-of-stock` (modifier)

## Bonus – Aesthetics
Clean and minimal layout. Adding some green/yellow McDonald's branding colors and a total section at the bottom would make this look like a real ordering interface.

## Summary of Critical Fixes
- **Bug:** Implement `decreasequantity(item)` — decrements quantity or removes if zero.
- **Bug:** Implement `removefromcart(id)` — filters the item from `cart.value`.
- **Bug:** Define `totalPrice` as a `computed` value using `cart.value.reduce(...)`.
- Wrap menu and cart items in `<ul>` / `<li>` for semantic HTML.
- Rename CSS classes to BEM: `.menu__item`, `.cart__item`.
