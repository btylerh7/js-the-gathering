import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface MagicCard {
  name: string;
  imageUri: string;
  setName: string;
  setNumber: number;

}
export const useDeckStore = defineStore('deck', () => {
  const deck = ref<MagicCard[]>([])
  function addCard(card: MagicCard) {
    deck.value.push(card)
  }
  function removeCard(set: string, number: number) {
    deck.value = deck.value.filter(card => card.name != set && card.setNumber != number);
  }
  return { deck, addCard, removeCard }
})
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
