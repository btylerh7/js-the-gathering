<script setup lang="ts">
import { ref } from 'vue';
import Card from './components/Card.vue';
import { useDeckStore, type MagicCard } from './stores/counter';
import Spinner from './components/Spinner.vue';
const { deck, addCard } = useDeckStore();
const setInput = ref("");
const numberInput = ref("");
const loadingCard = ref(false);
async function getCardInfo() {
  loadingCard.value = true
  const apiUrl = `https://api.scryfall.com/cards/${setInput.value}/${numberInput.value}`;
  const result = await fetch(apiUrl);
  const json = await result.json();
  const card: MagicCard = {
    name: json.name,
    imageUri: json.image_uris.thumb,
    setName: json.set_name,
    setNumber: json.collector_number,
  }
  addCard(card);
  numberInput.value = "";
  setInput.value = "";
  loadingCard.value = false;
}
</script>

<template>
  <h1>View Magic Cards!</h1>
  <p>Very simple card viewer right now. Woo.</p>
  <div class="card-selector">
    <label for="set">Set: <input type="text" id="set" name="set" v-model="setInput"></label>
    <label for="number">Number: <input type="text" id="number" name="number" v-model="numberInput"></label>
    <button @click="getCardInfo()">Add</button>
  </div>
  <Spinner v-if="loadingCard" />
  <div class="card-display">
    <Card v-for="card in deck" :imageUrl="card.imageUri" :name="card.name" />
  </div>

</template>

<style scoped>
.card-selector {
  display: flex;
  gap: 1rem;
  padding: 1em;
}

input[type='text'] {
  border-radius: 10px;
  padding: 0.5rem 1rem;
}

button {
  background: skyblue;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.card-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1em;
}
</style>
