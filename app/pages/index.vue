<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore';

const authStore = useAuthStore();
</script>
<template>
	<header>
		<h1>Deck Builder</h1>
		<p>
			A Magic: The Gathering deck builder that can be
			self-hosted for you and your friends to hate on
			each other's decks!
		</p>
		<button @click="navigateTo('/decks')" style="max-width: fit-content;" v-if="authStore.user">
			Go to my decks!
		</button>
		<p v-else>You must be logged in to view this application. Please
			<NuxtLink to="/sign-in">sign in</NuxtLink>
		</p>
	</header>
</template>
<style scoped>
header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	text-align: center;
}
</style>
