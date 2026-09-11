<script setup lang="ts">
import { NuxtLink } from '#components';
import { authClient } from '#shared/auth-client';
const session = authClient.useSession();

</script>
<template>
	<nav>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink v-if="!session.data" to="/sign-in">Sign In</NuxtLink>
		<p v-if="session.data">Hi, {{ session.data.user.name }}</p>
		<button v-if="session.data" @click="authClient.signOut()">Sign Out</button>
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1em;
	padding-block: 1em;
	max-width: 90vw;
	font-size: 1.25rem;

}

a {
	text-decoration: none;
}
</style>
