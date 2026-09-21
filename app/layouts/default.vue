<script setup lang="ts">
import { Navbar } from '#components';
import { useAuthStore } from '~/stores/authStore';

const authStore = useAuthStore();

// Rest of page will not render until this promise resolves
await authStore.init();

</script>

<template>
	<Navbar />
	<main>
		<slot />
	</main>
</template>
<style>
:root {
	--theme-color: hsl(255 50 50);
	--background: white;
	--text-color: black;
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
	background: var(--background);
	color: var(--text-color);
}

main {
	margin: auto;
	display: grid;
	place-content: center;
}
</style>
