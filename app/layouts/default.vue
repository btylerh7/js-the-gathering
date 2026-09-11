<script setup lang="ts">
import { Navbar } from '#components';

</script>

<template>
	<Navbar />
	<main>
		<slot />
	</main>
</template>
<style>
main {
	margin: auto;
	display: grid;
	place-content: center;
}
</style>
