<template>
    <div>
        <h2>{{ flavor.flavor }}</h2>
        <h2>{{flavor.cost}}</h2>
    </div>
</template>

<script setup>

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