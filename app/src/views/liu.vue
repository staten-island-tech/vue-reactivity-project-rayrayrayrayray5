<template>
  <h1>Aiden Liu's Ripoff Froyo Shop</h1>
  <div class="container">
    <FroyoCard
      @click="addToFroyo(froyo)"
      v-for="froyo in flavorlist"
      :key="froyo.flavor"
      :froyo="froyo"
    >
      <button>Add To Froyo</button>
    </FroyoCard>
  </div>
  <div class="froyo-cart">
    <h1>Your Froyo</h1>
    <ul>
      <h2 v-for="item in cart" :key="item.flavor">
        {{ item.flavor }} — ${{ item.cost.toFixed(2) }}
      </h2>
    </ul>
    <h2>Total: ${{ totalCost.toFixed(2) }}</h2>
    <img
      class="aidenliu"
      src="/aiden liu froyo bowl empty no background.png"
      alt="aiden liu empty bowl"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FroyoCard from '@/components/froyocard.vue'

const cart = ref([])
const totalCost = ref(0)
function addToFroyo(item) {
  cart.value.push(item)
  totalCost.value += item.cost
  console.log(cart, totalCost.value.toFixed(2))
}

const flavorlist = ref([
  { flavor: 'Chocolate', cost: 14.25, type: 'Flavor' },
  { flavor: 'Vanilla', cost: 13.5, type: 'Flavor' },
  { flavor: 'Strawberry', cost: 14.25, type: 'Flavor' },
  { flavor: 'Mango', cost: 15.0, type: 'Flavor' },
  { flavor: 'Cookies & Cream', cost: 15.75, type: 'Flavor' },
  { flavor: 'Mint', cost: 14.25, type: 'Flavor' },
  { flavor: 'Sprinkles', cost: 1.5, type: 'Topping' },
  { flavor: 'Chocolate Chips', cost: 2.25, type: 'Topping' },
  { flavor: 'Gummy Bears', cost: 2.1, type: 'Topping' },
  { flavor: 'Marshmallows', cost: 1.95, type: 'Topping' },
  { flavor: 'Strawberries', cost: 2.7, type: 'Topping' },
  { flavor: 'Hot Fudge', cost: 2.55, type: 'Topping' },
  { flavor: 'Whipped Cream', cost: 1.8, type: 'Topping' },
  { flavor: 'Crushed Oreos', cost: 2.85, type: 'Topping' },
])
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

button {
  background-color: beige;
}

.aidenliu {
  position: absolute;
  top: 89%;
  right: 20%;
  width: 800px;
  height: auto;
  padding-bottom: 20px;
}
</style>
