<script lang="ts">
	let name: string = '';
	let email: string = '';
	let message: string = '';
	let loading: boolean = false;
	let successMessage: string | null = null;
	let errorMessage: string | null = null;

	async function handleSubmit() {
		loading = true;
		successMessage = null;
		errorMessage = null;

		// TODO: Implementar a lógica de envio do formulário aqui
		// Exemplo: enviar para uma API, serviço de email, etc.
		console.log('Dados do formulário:', { name, email, message });

		// Simular um tempo de envio
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Exemplo de feedback (substituir pela lógica real)
		const isSuccess = Math.random() > 0.3; // Simular sucesso/falha

		if (isSuccess) {
			successMessage = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
			name = '';
			email = '';
			message = '';
		} else {
			errorMessage = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
		}

		loading = false;
	}
</script>

<section id="contact" class="min-h-dvh bg-gray-50 py-16 dark:bg-gray-800">
	<div class="container mx-auto px-6 md:px-12">
		<h2 class="mb-12 text-center text-4xl font-bold text-gray-800 dark:text-white">
			Entre em Contato
		</h2>
		<div class="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-xl dark:bg-gray-700">
			<p class="mb-6 text-gray-700 dark:text-gray-300">
				Tem alguma pergunta, proposta ou apenas quer dizer um olá? <br /> Preencha o formulário abaixo.
			</p>
			<form onsubmit={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>Nome</label
					>
					<input
						type="text"
						id="name"
						bind:value={name}
						required
						class="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
						placeholder="Seu nome completo"
					/>
				</div>
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>Email</label
					>
					<input
						type="email"
						id="email"
						bind:value={email}
						required
						class="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
						placeholder="seu.email@exemplo.com"
					/>
				</div>
				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>Mensagem</label
					>
					<textarea
						id="message"
						bind:value={message}
						required
						rows={4}
						class="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
						placeholder="Sua mensagem..."
					></textarea>
				</div>

				{#if successMessage}
					<div class="rounded-md bg-green-50 p-3 dark:bg-green-700">
						<p class="text-sm text-green-700 dark:text-green-100">{successMessage}</p>
					</div>
				{/if}

				{#if errorMessage}
					<div class="rounded-md bg-red-50 p-3 dark:bg-red-700">
						<p class="text-sm text-red-700 dark:text-red-100">{errorMessage}</p>
					</div>
				{/if}

				<div>
					<button
						type="submit"
						disabled={loading}
						class="bg-primary-400 hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600
            flex w-full justify-center rounded-md border border-transparent px-4 py-3 text-sm font-medium text-white shadow-sm
            transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
					>
						{loading ? 'Enviando...' : 'Enviar Mensagem'}
					</button>
				</div>
			</form>

			<div class="mt-10 text-center">
				<p class="mb-2 text-gray-700 dark:text-gray-300">Ou entre em contato diretamente:</p>
				<a
					href="mailto:micaelf81@gmail.com"
					class="text-primary-600 dark:text-primary-400 text-lg font-medium"
				>
					micaelf81@gmail.com
				</a>
				<p class="text-gray-600 dark:text-gray-400">+(55) 91 99178-8197</p>
				<div class="mt-4 flex justify-center space-x-4">
					<a
						href="https://linkedin.com/in/micael-fernandes21"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 transition-colors dark:text-gray-400"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
							><path
								fill-rule="evenodd"
								d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">LinkedIn</span>
					</a>
					<a
						href="https://github.com/micaelcf"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 transition-colors dark:text-gray-400"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
							><path
								fill-rule="evenodd"
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">GitHub</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
