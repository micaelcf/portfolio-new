<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<NavBar />
<main class="h-full w-full">
	{@render children()}
</main>
