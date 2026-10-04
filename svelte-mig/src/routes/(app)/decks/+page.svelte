<script setup lang="ts">
	import { authClient } from "#lib/client.ts";

const session = authClient.useSession();
</script>

<template>
	<header v-if="authStore.user">
		<h1>{{ authStore: session.user.name }}'s Decks</h1>
	</header>
	<ActionButton href='/add-deck'>Add Deck</ActionButton>
</template>
