<script setup lang="ts">
import { NuxtLink } from '#components';
import { useAuthStore } from '~/stores/authStore';
const authStore = useAuthStore()

</script>
<template>
	<nav>
		<div>
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink v-if="!authStore.user" to="/sign-in">Sign In</NuxtLink>
			<NuxtLink v-if="authStore.user" to="/decks">Decks</NuxtLink>
			<p v-if="authStore.user">Hi, {{ authStore.user.name }}</p>
			<button v-if="authStore.user" @click="authStore.signOut()">Sign Out</button>
		</div>
	</nav>
</template>

<style scoped>
nav {
	background: var(--theme-color);
	color: white;
	font-weight: 600;
	min-height: 4em;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 3em;

	div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1em;
		padding-block: 0.5em;
	}

}

a {
	text-decoration: none;
	color: white;

	&:visited {
		color: white;
	}
}
</style>
