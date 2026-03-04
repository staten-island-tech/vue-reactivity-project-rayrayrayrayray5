<template>
<div class="froyo-cart">
  <h2>Your Froyo</h2>
  <ul>
    <h2 v-for="item in cart" :key="item.flavor">{{ item.flavor }} — ${{ item.cost.toFixed(2) }}</h2>
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