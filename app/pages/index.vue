<script setup lang="ts">
import { authClient } from '#shared/auth-client';

const session = authClient.useSession();

</script>
<template>
	<div v-if="session.data">
		<h1>{{ session.data.user.name }}'s Decks</h1>
	</div>
	<div v-else=>
		<h1>Deck Builder</h1>
		<p>You must be logged in to view this application. Please
			<NuxtLink to="/sign-in">sign in</NuxtLink>
		</p>
	</div>
</template>
<style scoped></style>
