<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

const { onClick, href } = defineProps<{
	onClick?: ((payload: PointerEvent) => void) | undefined,
	href?: string,
	type?: "button" | "submit" | "reset" | undefined
}>();

function createClickHandler() {
	if (href) {
		return ((_payload: PointerEvent) => {
			navigateTo(href);
		})
	}
	return onClick;
}
const handleClick = createClickHandler();

</script>
<template>
	<button :type="type" @click="handleClick">
		<slot />
	</button>
</template>

<style scoped>
button {
	background: var(--theme-color);
	border-radius: 0.5rem;
	max-width: fit-content;
	color: white;
	font-size: 1.25rem;
	padding: 0.25rem 1rem;
	cursor: pointer;
	transition: all 200ms ease;

	&:hover {
		background: var(--background);
		color: var(--text-color);
	}
}
</style>
