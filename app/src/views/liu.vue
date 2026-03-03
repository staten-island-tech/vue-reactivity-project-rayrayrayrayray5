<template>
    <div class="container">
        <FroyoCard @click="addToFroyo(froyo)" v-for="froyo in flavorlist" :key="froyo.flavor" :froyo="froyo">
          <button>Add To Froyo</button>
        </FroyoCard>
    </div>
    <CartCard></CartCard>
</template>

<script setup>
import {ref} from 'vue'
import FroyoCard from '@/components/froyocard.vue';
import CartCard from '@/components/cart.vue';

const cart = ref([])
const totalCost = ref(0)
function addToFroyo(item){
  cart.value.push(item)
  totalCost.value += item.cost
  console.log(cart, totalCost.value.toFixed(2))
}

const flavorlist = ref([
  { flavor: "Vanilla", cost: 4.50, type: "cream" },
  { flavor: "Chocolate", cost: 4.75, type: "cream" },
  { flavor: "Strawberry", cost: 4.75, type: "cream" },
  { flavor: "Mango", cost: 5.00, type: "cream" },
  { flavor: "Cookies & Cream", cost: 5.25, type: "cream" },
  { flavor: "Mint", cost: 4.75, type: "cream" },
  { flavor: "Peach", cost: 5.00, type: "cream" },
  { flavor: "Pistachio", cost: 5.50, type: "cream" },
  { flavor: "Raspberry", cost: 5.00, type: "cream" },
  { flavor: "Pineapple", cost: 5.00, type: "cream" },
  { flavor: "Red Velvet", cost: 5.50, type: "cream" },
  { flavor: "Coffee", cost: 5.00, type: "cream" },
  { flavor: "Banana", cost: 4.75, type: "cream" },
  { flavor: "Coconut", cost: 5.25, type: "cream" },
  { flavor: "Lemon", cost: 4.75, type: "cream" },
  { flavor: "Cherry", cost: 5.00, type: "cream" },
  { flavor: "Cotton Candy", cost: 5.25, type: "cream" },
  { flavor: "Birthday Cake", cost: 5.50, type: "cream" },
  { flavor: "Taro", cost: 5.50, type: "cream" },
  { flavor: "Matcha Swirl", cost: 5.75, type: "cream" },
  { flavor: "Sprinkles", cost: 0.50, type: "topping" },
  { flavor: "Chocolate Chips", cost: 0.75, type: "topping" },
  { flavor: "Cookie Crumbles", cost: 0.85, type: "topping" },
  { flavor: "Gummy Bears", cost: 0.70, type: "topping" },
  { flavor: "Marshmallows", cost: 0.65, type: "topping" },
  { flavor: "Strawberries", cost: 0.90, type: "topping" },
  { flavor: "Blueberries", cost: 0.90, type: "topping" },
  { flavor: "Banana Slices", cost: 0.80, type: "topping" },
  { flavor: "Caramel Drizzle", cost: 0.75, type: "topping" },
  { flavor: "Hot Fudge", cost: 0.85, type: "topping" },
  { flavor: "Whipped Cream", cost: 0.60, type: "topping" },
  { flavor: "Crushed Oreos", cost: 0.95, type: "topping" }
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
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
button{
  background-color: beige;
}
</style>