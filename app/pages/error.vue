<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred.";
</script>
<template>
	<div>
		<h1>Uh oh! Something Went wrong!</h1>
		<p>{{ error }}</p>
	</div>
</template>
