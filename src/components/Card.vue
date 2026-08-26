<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps(['set', 'number'])
const imageUrl = ref("");
const cardName = ref("");
onMounted(async () => {
  const apiUrl = `https://api.scryfall.com/cards/${props.set}/${props.number}`;
  const result = await fetch(apiUrl);
  const json = await result.json();
  imageUrl.value = json.image_uris.thumb;
  cardName.value = json.name;
})
</script>
<template>
  <div class="card">
    <img v-if="imageUrl" :src="imageUrl">
    <p>{{cardName}}</p>
  </div>
</template>

<style scoped>
.card {
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;

}
</style>
