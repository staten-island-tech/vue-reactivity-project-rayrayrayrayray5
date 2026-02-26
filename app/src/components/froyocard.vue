<template>
    <div>
        <h2>{{ froyo.flavor }}</h2>
        <h3>${{ froyo.cost.toFixed(2) }}</h3>
        <button>Add</button>
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
    border: 3px solid black;
}
</style>