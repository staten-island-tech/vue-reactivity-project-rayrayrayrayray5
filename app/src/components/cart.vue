<template>
<div class="froyo-cart">
  <h2>Your Froyo</h2>
  <ul>
    <li v-for="item in cart" :key="item.flavor">{{ item.flavor }} — ${{ item.cost.toFixed(2) }}</li>
  </ul>
  <p>Total: ${{ totalCost.toFixed(2) }}</p>
</div>
</template>

<script setup>

</script>

<style scoped>
div{
    background-color: black;
}
</style>