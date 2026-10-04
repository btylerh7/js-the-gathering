<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import '../app.css';
	import Navbar from '#lib/components/Navbar.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<body>
	<Navbar />
	{@render children()}
</body>
