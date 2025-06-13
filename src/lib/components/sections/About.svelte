<script lang="ts">
	// No script needed for this static section yet
	const skills = [
		'JavaScript (ES6+)',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Svelte/SvelteKit',
		'SolidJS',
		'Next.js',
		'React',
		'SSR',
		'Responsive Design',
		'UI/UX Principles',
		'Web Performance',
		'Accessibility (a11y)',
		'Cypress',
		'Jest/Vitest',
		'Go (Golang)',
		'Node.js',
		'NestJS',
		'RESTful APIs',
		'Microservices',
		'SQL (MySQL, PostgreSQL)',
		'NoSQL',
		'AWS',
		'Google Cloud',
		'Docker',
		'Kubernetes',
		'CI/CD',
		'Git/GitHub',
		'Agile/Scrum',
		'Python (ML/Scripting)'
	];
</script>

<section id="about" class="min-h-dvh bg-gray-50 py-16 dark:bg-gray-800">
	<div class="container mx-auto px-6 md:px-12">
		<h2 class="mb-12 text-center text-4xl font-bold text-gray-800 dark:text-white">Sobre Mim</h2>
		<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
			<div class="space-y-6 text-gray-700 md:col-span-2 dark:text-gray-300">
				<p class="text-lg leading-relaxed">
					Desenvolvedor Front-end Mid-level com mais de 5 anos de experiência, altamente motivado e
					especializado na construção de aplicações web sofisticadas e de alta performance. Minha
					paixão é traduzir requisitos complexos em interfaces de usuário intuitivas e responsivas,
					utilizando frameworks modernos como SvelteKit, Next.js e SolidJS.
				</p>
				<p class="text-lg leading-relaxed">
					Possuo um forte entendimento full-stack (Go, Node.js/NestJS) e experiência em deploy na
					nuvem (AWS, Docker, CI/CD), o que me permite colaborar efetivamente em soluções robustas
					de ponta a ponta. Sou um entusiasta de código limpo, tecnologias inovadoras e em entregar
					experiências de usuário excepcionais em ambientes de equipe colaborativos.
				</p>
				<p class="text-lg leading-relaxed">
					Busco constantemente otimizar a performance e a manutenibilidade dos projetos,
					contribuindo ativamente em discussões de design e estratégias de implementação.
					Palavras-chave: <span class="text-primary-600 dark:text-primary-400 font-semibold"
						>SvelteKit, Next.js, SolidJS, TypeScript, SSR, Go, Node.js, AWS, Docker, CI/CD,
						Microserviços, APIs RESTful, Agile.</span
					>
				</p>
			</div>
		</div>

		<div class="mt-16">
			<h3 class="mb-10 text-center text-3xl font-semibold text-gray-800 dark:text-white">
				Principais Habilidades
			</h3>
			<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{#each skills as skill, i (i)}
					<div
						class="rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-700"
					>
						<p class="text-center font-medium text-gray-700 dark:text-gray-200">{skill}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
