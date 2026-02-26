<template>
    <div class="container">
        <FroyoCard v-for="froyo in flavorlist" :key="froyo.flavor" :froyo="froyo"></FroyoCard>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import FroyoCard from '@/components/froyocard.vue';
const flavorlist = ref([
  { flavor: "Vanilla", cost: 4.50 },
  { flavor: "Chocolate", cost: 4.75 },
  { flavor: "Strawberry", cost: 4.75 },
  { flavor: "Mango", cost: 5.00 },
  { flavor: "Cookies & Cream", cost: 5.25 },
  { flavor: "Mint", cost: 4.75 },
  { flavor: "Peach", cost: 5.00 },
  { flavor: "Pistachio", cost: 5.50 },
  { flavor: "Raspberry", cost: 5.00 },
  { flavor: "Pineapple", cost: 5.00 },
  { flavor: "Red Velvet", cost: 5.50 },
  { flavor: "Coffee", cost: 5.00 },
  { flavor: "Banana", cost: 4.75 },
  { flavor: "Coconut", cost: 5.25 },
  { flavor: "Lemon", cost: 4.75 },
  { flavor: "Cherry", cost: 5.00 },
  { flavor: "Cotton Candy", cost: 5.25 },
  { flavor: "Birthday Cake", cost: 5.50 },
  { flavor: "Taro", cost: 5.50 },
  { flavor: "Matcha Swirl", cost: 5.75 },
  { flavor: "Sprinkles", cost: 0.50 },
  { flavor: "Chocolate Chips", cost: 0.75 },
  { flavor: "Cookie Crumbles", cost: 0.85 },
  { flavor: "Gummy Bears", cost: 0.70 },
  { flavor: "Marshmallows", cost: 0.65 },
  { flavor: "Strawberries", cost: 0.90 },
  { flavor: "Blueberries", cost: 0.90 },
  { flavor: "Banana Slices", cost: 0.80 },
  { flavor: "Caramel Drizzle", cost: 0.75 },
  { flavor: "Hot Fudge", cost: 0.85 },
  { flavor: "Whipped Cream", cost: 0.60 },
  { flavor: "Crushed Oreos", cost: 0.95 }
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
  background-color: aqua;
}

</style>