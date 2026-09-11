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

	div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1em;
		max-width: 90vw;
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
