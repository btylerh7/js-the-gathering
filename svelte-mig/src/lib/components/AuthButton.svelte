<script lang="ts">
	import { authClient } from '#lib/client.ts';
	let { newUser }: { newUser?: boolean } = $props();
	const email = $state('');
	const password = $state('');
	const name = $state('');
	async function signIn(e: Event) {
		e.preventDefault();
		await authClient.signIn.email({ email, password });
	}
	async function signUp(e: Event) {
		e.preventDefault();
		await authClient.signUp.email({ name, email, password });
	}
</script>

<form>
	{#if newUser == true}
		<label for="name">
			Name
			<input type="text" name="name" id="name" />
		</label>
	{/if}
	<label for="email">
		Email
		<input type="text" name="email" id="email" />
	</label>
	<label for="password">
		Password
		<input type="password" name="password" id="password" />
	</label>
	{#if newUser == true}
		<button type="button" onclick={(e) => signIn(e)}>Sign In</button>
		<a href="/sign-in">Already have an account? Sign In</a>
	{:else}
		<button type="button" onclick={(e) => signUp(e)}>Sign Up</button>
		<a href="/sign-up">Don't have an account? Sign Up</a>
	{/if}
</form>

<style>
	form {
		--min-height: 2em;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		width: 100%;
		max-width: 500px;
		margin: auto;
	}

	input {
		border-radius: 5px;
		min-height: var(--min-height);
	}

	label {
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
	}

	button {
		min-height: var(--min-height);
		padding-block: 0.5em;
		background: skyblue;
		border-radius: 5px;
	}
</style>
