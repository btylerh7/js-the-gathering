<script lang="ts">
  import { authClient } from "#lib/client.ts";
  const session = authClient.useSession();
</script>
<header>
  	<h1>Deck Builder</h1>
  	<p>
    		A Magic: The Gathering deck builder that can be
    		self-hosted for you and your friends to hate on
    		each other's decks!
  	</p>
  	{#if $session.data}
  	<a href="/decks" style="max-width: fit-content;">
    		Go to my decks!
  	</a>
  	{:else}
  	<p>You must be logged in to view this application. Please
    		<a href="/sign-in">sign in</a>
  	</p>
  	{/if}
</header>
<style>
header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	text-align: center;
}
</style>
