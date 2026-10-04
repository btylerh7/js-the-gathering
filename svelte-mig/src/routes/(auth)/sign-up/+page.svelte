<script lang="ts">
	import AuthButton from '#lib/components/AuthButton.svelte';
</script>

<main>
	<AuthButton newUser={true} />
</main>

<style>
	main {
		height: 98vh;
		overflow-y: hidden;
		display: grid;
		width: 100%;
	}
</style>
