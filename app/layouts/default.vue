<script setup lang="ts">
import '~/assets/css/main.css';
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
