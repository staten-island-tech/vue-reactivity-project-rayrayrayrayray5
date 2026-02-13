<template>
    <div class="container">
        <FroyoCard v-for="froyo in flavorlist" :key="froyo.flavor" :froyo="froyo"
        />
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
  { flavor: "Blueberry", cost: 5.00 },
  { flavor: "Cookies & Cream", cost: 5.25 },
  { flavor: "Mint", cost: 4.75 },
  { flavor: "Peach", cost: 5.00 },
  { flavor: "Pistachio", cost: 5.50 },
  { flavor: "Salted Caramel", cost: 5.25 },
  { flavor: "Raspberry", cost: 5.00 },
  { flavor: "Pineapple", cost: 5.00 },
  { flavor: "Green Tea", cost: 5.25 },
  { flavor: "Red Velvet", cost: 5.50 },
  { flavor: "Coffee", cost: 5.00 },
  { flavor: "Banana", cost: 4.75 },
  { flavor: "Coconut", cost: 5.25 },
  { flavor: "Lemon", cost: 4.75 },
  { flavor: "Cherry", cost: 5.00 },
  { flavor: "Cotton Candy", cost: 5.25 },
  { flavor: "Birthday Cake", cost: 5.50 },
  { flavor: "Honeydew", cost: 5.00 },
  { flavor: "Taro", cost: 5.50 },
  { flavor: "Matcha Swirl", cost: 5.75 },
  { flavor: "Brownie Batter", cost: 5.75 }
])
</script>

<style scoped>
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

</style>