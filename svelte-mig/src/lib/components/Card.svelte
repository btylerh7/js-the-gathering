<script lang="ts">
	const { imageUrl, name, alt }: { imageUrl: string; name: string; alt?: string } = $props();
</script>

<div class="card">
	<img src={imageUrl} alt={alt ?? name} />
	<p>{name}</p>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
