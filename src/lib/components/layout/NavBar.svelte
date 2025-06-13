<script lang="ts">
	import { browser } from '$app/environment';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Props {}

	let {}: Props = $props();

	const navBarItens: Array<{ label: string; ref: string; icon: string }> = [
		{
			label: 'Home',
			ref: 'home',
			icon: 'ic:round-home'
		},
		{
			label: 'About',
			ref: 'about',
			icon: 'ic:round-person'
		},
		{
			label: 'Projects',
			ref: 'projects',
			icon: 'ic:round-code'
		},
		{
			label: 'Contact',
			ref: 'contact',
			icon: 'ic:round-send'
		}
	];

	let hasScrolled = $derived(true);
	let activeItem = $state(0);

	const handleNavItemClick = (i: number) => {
		const el = document.getElementById(navBarItens[i].ref);
		const top = i === 0 ? 0 : el?.offsetTop;
		window?.scrollTo({ top, behavior: 'smooth' });
		activeItem = i;
	};

	const handleScroll = (e: Event) => {
		hasScrolled = (e.target as Window).scrollY > 50;
	};

	onMount(() => {
		if (!browser) return;
		window.addEventListener('scroll', handleScroll);
	});
	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('scroll', handleScroll);
	});
	$inspect({ hasScrolled });
</script>

<nav class="sticky top-0 flex w-full items-center bg-gray-900/60 backdrop-blur-lg">
	<ul class="flex items-center gap-4 p-4 md:gap-6">
		{#each navBarItens as { label, icon }, i (i)}
			<li>
				<button
					class={cn(
						'flex items-center gap-3 text-lg text-white',
						'transition-colors duration-300 hover:text-lime-300',
						activeItem === i && 'text-lime-400'
					)}
					onclick={() => handleNavItemClick(i)}
				>
					<Icon {icon} class="size-6" />
					<span class="hidden font-semibold md:block">
						{label}
					</span>
				</button>
			</li>
		{/each}
	</ul>
	<span transition:fly={{ y: -30 }} class="block font-semibold text-lime-400 md:hidden">
		{navBarItens[activeItem ?? 0].label}
	</span>
</nav>

<!-- <nav class={navClasses()}>
	{" "}
	{/* Apply dynamic classes */}
	{/* Center the ul content and add icons */}
	<ul class="container flex items-center justify-center p-3 transition-all text-lg text-gray-100">
		{/* Added justify-center */}
		{/* Updated Nav Links with Icons */}
		<li class={`border-b-2 ${active("#about")} mx-1.5 sm:mx-6`}>
			<a href="/#about" class="flex items-center gap-2">
				{/* Flex container for icon + text */}
				<CgUser size={24} /> {/* Replaced Icon */}
				About
			</a>
		</li>
		<li class={`border-b-2 ${active("#projects")} mx-1.5 sm:mx-6`}>
			<a href="/#projects" class="flex items-center gap-2">
				<CgList size={24} /> {/* Replaced Icon */}
				Projects
			</a>
		</li>
		<li class={`border-b-2 ${active("#skills")} mx-1.5 sm:mx-6`}>
			<a href="/#skills" class="flex items-center gap-2">
				<CgCodeSlash size={24} /> {/* Replaced Icon */}
				Skills
			</a>
		</li>
		<li class={`border-b-2 ${active("#contact")} mx-1.5 sm:mx-6`}>
			<a href="/#contact" class="flex items-center gap-2">
				<CgMail size={24} /> {/* Replaced Icon */}
				Contact
			</a>
		</li>
	</ul>
</nav> -->
