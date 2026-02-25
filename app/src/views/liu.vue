<template>
    <div class="container">
        <FroyoCard v-for="froyo in flavorlist" :key="froyo.flavor" :froyo="froyo"></FroyoCard>
    </div>
</template>

<script setup>
import FroyoCard from '@/components/froyocard.vue';
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