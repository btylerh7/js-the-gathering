<script setup lang="ts">
const { label, name } = defineProps<{
	label: string;
	name: string;
}>()

</script>
<template>
	<div>
		<label :for="name">{{ label }}</label>
		<slot />
	</div>
</template>

<style scoped>
div {
	display: flex;
	gap: 1rem;
}
</style>
