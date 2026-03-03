# Feedback – Rayrayrayrayray5

You built a froyo (frozen yogurt) builder with 32 flavors and toppings. The `v-for` and slot pattern are set up correctly, and the card design looks clean. The main issues are that the cost variable is not reactive and the cart component is empty, so nothing updates visibly when a flavor is added.

## Vite CLI – Mastery
`package.json` correctly includes `vite` and `@vitejs/plugin-vue` as dev dependencies with `vue` / `vue-router` as production dependencies.

## Iteration in Vue (v-for) – Mastery
`v-for` with `:key` is used correctly:
```html
<FroyoCard v-for="froyo in flavorlist" :key="froyo.flavor" :froyo="froyo">
```
`flavorlist` is wrapped in `ref([...])` ✅. The slot pattern in `froyocard.vue` is used correctly to inject the "Add To Froyo" button.

## Data Binding – Approaching
`flavorlist = ref([...])` is declared correctly and the prop `:froyo="froyo"` passes data to the card. `FroyoCard` displays `{{ froyo.flavor }}` and `{{ froyo.cost.toFixed(2) }}` correctly.

However, `cost` in `liu.vue` is a plain `let` variable:
```js
let cost = 0  // ❌ not reactive
```
Even if you displayed it in the template, it would never trigger a re-render when it changes.

## Click Methods – Approaching
The `@click` is placed on the `<FroyoCard>` component and `addToFroyo` is called:
```js
function addToFroyo(item) {
  cost += item.cost  // ❌ plain variable, not reactive
  console.log(item, cost.toFixed(2))  // only logs
}
```
The click fires, but nothing reactive is updated. Fix by tracking a cart array as a ref:
```js
const cart = ref([])
const totalCost = ref(0)
function addToFroyo(item) {
  cart.value.push(item)
  totalCost.value += item.cost
}
```

Also note: imports should go at the top of `<script setup>`, before function definitions:
```js
// ❌ current: function defined, then imports
function addToFroyo(item) { ... }
import FroyoCard from '@/components/froyocard.vue'

// ✅ fix: imports first
import FroyoCard from '@/components/froyocard.vue'
const cart = ref([])
function addToFroyo(item) { ... }
```

## Reactive UI – Not Yet
Because `cost` is not reactive, clicking a froyo card produces no visible change. The `CartCard` component is also completely empty:
```html
<!-- cart.vue -->
<template><div></div></template>
```
No cart is ever displayed. Add the `cart` ref and render it:
```html
<div class="froyo-cart">
  <h2>Your Froyo</h2>
  <ul>
    <li v-for="item in cart" :key="item.flavor">{{ item.flavor }} — ${{ item.cost.toFixed(2) }}</li>
  </ul>
  <p>Total: ${{ totalCost.toFixed(2) }}</p>
</div>
```

## Semantic HTML – Approaching
The froyo card uses `<h2>` for flavor name and `<h3>` for price, which is reasonable. However, the flavor list should use `<ul>` / `<li>` instead of flex divs. Also, `div { padding: 16px }` is a bare element selector that affects **all divs globally** — use a class:
```css
/* ❌ affects all divs */
div { padding: 16px }

/* ✅ use a class */
.froyo-builder { padding: 16px }
```

## BEM CSS – Not Yet
No BEM class names are present. The card styling in `froyocard.vue` uses bare `div` as the selector. BEM would be:
- `.froyo-builder` (block)
- `.froyo-card` (block — for the individual card)
- `.froyo-card__name` (element)
- `.froyo-card__price` (element)
- `.froyo-cart` (block)
- `.froyo-cart__item` (element)

## Bonus – Aesthetics
The gold-border froyo card design is warm and inviting. With 32 flavors and toppings, the scope is ambitious. Completing the cart display would make this feel like a real froyo kiosk.

## Summary of Critical Fixes
- **Replace `let cost = 0` with `const cart = ref([])` and `const totalCost = ref(0)`** and update them in `addToFroyo`.
- **Build out `cart.vue`** — it's completely empty. Display `cart` and `totalCost`.
- Move imports to the top of `<script setup>`, before function definitions.
- Replace `div { padding: 16px }` with a scoped class selector.
- Wrap flavor cards in `<ul>` / `<li>`.
- Rename CSS to BEM: `.froyo-card`, `.froyo-card__name`, `.froyo-cart`.
