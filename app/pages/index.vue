<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore';

const authStore = useAuthStore();

</script>
<template>
	<div v-if="authStore.user">
		<h1>{{ authStore.user.name }}'s Decks</h1>
	</div>
	<div v-else=>
		<h1>Deck Builder</h1>
		<p>You must be logged in to view this application. Please
			<NuxtLink to="/sign-in">sign in</NuxtLink>
		</p>
	</div>
</template>
<style scoped></style>
