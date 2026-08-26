<script setup lang="ts">
import Card from './components/Card.vue';
</script>

<template>
  <h1>View Magic Cards!</h1>
  <p>Very simple card viewer right now. Woo.</p>
  <div class="card-display">
    <Card set="ecc" number="2" />
    <Card set="ecc" number="3" />
    <Card set="ecc" number="4" />
    <Card set="ecc" number="5" />
  </div>

</template>

<style scoped>
  .card-display {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
