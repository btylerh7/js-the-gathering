<script setup lang="ts">
import { NuxtLink } from '#components';
import { authClient } from '#shared/auth-client';
const session = authClient.useSession();

</script>
<template>
	<nav>
		<div>
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink v-if="!session.data" to="/sign-in">Sign In</NuxtLink>
			<p v-if="session.data">Hi, {{ session.data.user.name }}</p>
			<button v-if="session.data" @click="authClient.signOut()">Sign Out</button>
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
