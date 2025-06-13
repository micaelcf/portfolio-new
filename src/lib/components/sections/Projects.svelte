<script lang="ts">
	type Project = {
		id: number;
		name: string;
		description: string;
		imageUrl: string;
		techStack: string[];
		githubUrl?: string;
		liveUrl?: string;
	};

	const mockProjects: Project[] = [
		{
			id: 1,
			name: 'Projeto Incrível 1',
			description:
				'Uma breve descrição sobre este projeto fantástico, destacando seus principais objetivos e tecnologias utilizadas. Ideal para demonstrar minhas habilidades em desenvolvimento web moderno.',
			imageUrl: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Projeto+1',
			techStack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Node.js'],
			githubUrl: '#',
			liveUrl: '#'
		},
		{
			id: 2,
			name: 'Solução Inovadora 2',
			description:
				'Outro exemplo de projeto, mostrando a versatilidade e capacidade de criar soluções eficientes e elegantes para diferentes desafios. Foco na experiência do usuário e performance.',
			imageUrl: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Projeto+2',
			techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Go', 'Docker'],
			githubUrl: '#'
		}
	];
</script>

<section id="projects" class="min-h-dvh bg-white py-16 dark:bg-gray-900">
	<div class="container mx-auto px-6 md:px-12">
		<h2 class="mb-12 text-center text-4xl font-bold text-gray-800 dark:text-white">
			Meus Projetos
		</h2>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			{#each mockProjects as project (project.id)}
				<div
					class="flex flex-col overflow-hidden rounded-lg bg-gray-50 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800"
				>
					<img src={project.imageUrl} alt={project.name} class="h-56 w-full object-cover" />
					<div class="flex flex-grow flex-col p-6">
						<h3 class="text-primary-600 dark:text-primary-400 mb-3 text-2xl font-semibold">
							{project.name}
						</h3>
						<p class="mb-4 flex-grow leading-relaxed text-gray-700 dark:text-gray-300">
							{project.description}
						</p>
						<div class="mb-4">
							<h4 class="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
								Tecnologias Utilizadas:
							</h4>
							<div class="flex flex-wrap gap-2">
								{#each project.techStack as tech}
									<span
										class="bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full px-2 py-1 text-xs font-semibold"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
						<div class="mt-auto flex space-x-4">
							{#if project.githubUrl}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
								>
									Ver no GitHub
								</a>
							{/if}
							{#if project.liveUrl}
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
								>
									Ver Online
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<p class="mt-12 text-center text-gray-600 dark:text-gray-400">
			Mais projetos serão adicionados em breve!
		</p>
	</div>
</section>
