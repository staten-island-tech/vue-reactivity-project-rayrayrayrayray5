<template>
    <div>
        <h2>{{ froyo.flavor }}</h2>
        <h3>${{ froyo.cost.toFixed(2)}}</h3>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    froyo:{
        type:Object,
        required: true,
    },
})
</script>

<style  scoped>
div{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 150px;
    border: 3px solid rgb(230, 170, 6);
    background-color: rgb(255, 220, 155);
}
</style>