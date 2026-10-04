<script lang="ts">
	import { authClient } from '#lib/client.ts';
	const session = authClient.useSession();
</script>

<nav>
	<div>
		<a href="/">Home</a>
		{#if $session.data}
			<a href="/decks">Decks</a>
			<p>Hi, {$session.data.user.name}</p>
			<button onclick={() => authClient.signOut()}>Sign Out</button>
		{:else}
			<a href="/sign-in">Sign In</a>
		{/if}
	</div>
</nav>

<style>
	nav {
		background: var(--theme-color);
		color: white;
		font-weight: 600;
		min-height: 4em;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0 3em;

		div {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 1em;
			padding-block: 0.5em;
		}
	}

	a {
		text-decoration: none;
		color: white;

		&:visited {
			color: white;
		}
	}
</style>
