<script setup lang="ts">

const props = defineProps(['imageUrl', 'name'])
</script>
<template>
  <div class="card">
    <img :src="props.imageUrl">
    <p>{{ props.name }}</p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
