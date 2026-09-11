<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore';
const authStore = useAuthStore();
</script>

<template>
	<header v-if="authStore.user">
		<h1>{{ authStore.user.name }}'s Decks</h1>
	</header>
</template>
