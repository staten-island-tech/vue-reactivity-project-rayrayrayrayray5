<template>
  <h1>Aiden Liu's Ripoff Froyo Shop</h1>
    <div class="container">
      
        <FroyoCard @click="addToFroyo(froyo)" v-for="froyo in flavorlist" :key="froyo.flavor" :froyo="froyo">
          <button>Add To Froyo</button>
        </FroyoCard>
    </div>
    <div class="froyo-cart">
  <h1>Your Froyo</h1>
  <ul>
    <h2 v-for="item in cart" :key="item.flavor">{{ item.flavor }} — ${{ item.cost.toFixed(2) }}</h2>
  </ul>
  <h2>Total: ${{ totalCost.toFixed(2) }}</h2>
  <img class="aidenliu" src="/aiden liu froyo bowl empty.png" alt="aiden liu empty bowl">
</div>
</template>

<script setup>
import {ref} from 'vue'
import FroyoCard from '@/components/froyocard.vue';

const cart = ref([])
const totalCost = ref(0)
function addToFroyo(item){
  cart.value.push(item)
  totalCost.value += item.cost
  console.log(cart, totalCost.value.toFixed(2))
}

const flavorlist = ref([
  { flavor: "Vanilla", cost: 9.00, type: "cream" },
  { flavor: "Chocolate", cost: 9.50, type: "cream" },
  { flavor: "Strawberry", cost: 9.50, type: "cream" },
  { flavor: "Mango", cost: 10.00, type: "cream" },
  { flavor: "Cookies & Cream", cost: 10.50, type: "cream" },
  { flavor: "Mint", cost: 9.50, type: "cream" },
  { flavor: "Peach", cost: 10.00, type: "cream" },
  { flavor: "Pistachio", cost: 11.00, type: "cream" },
  { flavor: "Raspberry", cost: 10.00, type: "cream" },
  { flavor: "Pineapple", cost: 10.00, type: "cream" },
  { flavor: "Red Velvet", cost: 11.00, type: "cream" },
  { flavor: "Coffee", cost: 10.00, type: "cream" },
  { flavor: "Banana", cost: 9.50, type: "cream" },
  { flavor: "Coconut", cost: 10.50, type: "cream" },
  { flavor: "Lemon", cost: 9.50, type: "cream" },
  { flavor: "Cherry", cost: 10.00, type: "cream" },
  { flavor: "Cotton Candy", cost: 10.50, type: "cream" },
  { flavor: "Birthday Cake", cost: 11.00, type: "cream" },
  { flavor: "Taro", cost: 11.00, type: "cream" },
  { flavor: "Matcha Swirl", cost: 11.50, type: "cream" },

  { flavor: "Sprinkles", cost: 1.00, type: "topping" },
  { flavor: "Chocolate Chips", cost: 1.50, type: "topping" },
  { flavor: "Cookie Crumbles", cost: 1.70, type: "topping" },
  { flavor: "Gummy Bears", cost: 1.40, type: "topping" },
  { flavor: "Marshmallows", cost: 1.30, type: "topping" },
  { flavor: "Strawberries", cost: 1.80, type: "topping" },
  { flavor: "Blueberries", cost: 1.80, type: "topping" },
  { flavor: "Banana Slices", cost: 1.60, type: "topping" },
  { flavor: "Caramel Drizzle", cost: 1.50, type: "topping" },
  { flavor: "Hot Fudge", cost: 1.70, type: "topping" },
  { flavor: "Whipped Cream", cost: 1.20, type: "topping" },
  { flavor: "Crushed Oreos", cost: 1.90, type: "topping" }
]);
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

.froyo-cart{
  background-color: aqua;
}

.aidenliu{
    position: absolute;
    bottom: 0;
    right: 0; 
    width: 500px;
    height: auto
}
</style>