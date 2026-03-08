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
    <div class="cart-info">
      <h1>Your Froyo</h1>
      <ul>
        <h2 v-for="item in cart" :key="item.flavor">
          {{ item.flavor }} — ${{ item.cost.toFixed(2) }}
        </h2>
      </ul>
      <h2>Total: ${{ totalCost.toFixed(2) }}</h2>
    </div>
    <div class="bowlstuff">
      <img
        class="aidenliu"
        src="/aiden liu froyo bowl empty no background.png"
        alt="aiden liu empty bowl"
      />
      <img class="aidenliufroyopics" v-for="(item, index) in cart" :key="index" :src="item.image" />
    </div>
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
  { flavor: 'Chocolate', cost: 14.25, type: 'Flavor', image: '/chocolate.png' },
  { flavor: 'Vanilla', cost: 13.5, type: 'Flavor', image: '/vanilla.png' },
  { flavor: 'Strawberry', cost: 14.25, type: 'Flavor', image: '/strawberry.png' },
  { flavor: 'Mango', cost: 15.0, type: 'Flavor', image: 'mango.png' },
  { flavor: 'Cookies & Cream', cost: 15.75, type: 'Flavor', image: 'cnc.png' },
  { flavor: 'Mint', cost: 14.25, type: 'Flavor', image: 'mint.png' },
  { flavor: 'Sprinkles', cost: 1.5, type: 'Topping', image: 'sprinkles.png' },
  { flavor: 'Chocolate Chips', cost: 2.25, type: 'Topping', image: 'cookies.png' },
  { flavor: 'Gummy Bears', cost: 2.1, type: 'Topping', image: 'gummy.png' },
  { flavor: 'Marshmallows', cost: 1.95, type: 'Topping', image: 'marsh.png' },
  { flavor: 'Strawberries', cost: 2.7, type: 'Topping', image: 'strawberries.png' },
  { flavor: 'Hot Fudge', cost: 2.55, type: 'Topping', image: 'fudge.png' },
  { flavor: 'Whipped Cream', cost: 1.8, type: 'Topping', image: 'cream.png' },
  { flavor: 'Oreos', cost: 2.85, type: 'Topping', image: 'oreo.png' },
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
.froyo-cart {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.cart-info {
  display: flex;
  flex-direction: column;
}

.bowlstuff {
  position: relative;
  width: 500px;
}
.aidenliufroyopics {
  position: absolute;
  top: 18%;
  left: 0%;
  width: 710px;
}
</style>
