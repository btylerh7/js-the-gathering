<script lang="ts">
	const { label, name, children } = $props();
</script>

<div class="form-input">
	<label for={name}>{label}</label>
	{@render children()}
</div>

<style>
	.form-input {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.invalid {
		outline: 1px solid crimson;
	}
</style>
