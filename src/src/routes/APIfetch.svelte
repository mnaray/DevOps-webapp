<script lang="ts">
	import { onMount } from 'svelte';
	// eslint-disable-next-line
	let triviaQuestions: any[] = [];

	onMount(async () => {
		const category = 'general';
		const apiKey = '';

		try {
			const response = await fetch(
				`https://api.api-ninjas.com/v1/trivia?category=${category}&limit=10`,
				{
					headers: {
						'X-Api-Key': apiKey
					}
				}
			);
			const data = await response.json();
			triviaQuestions = data;
		} catch (error) {
			console.error('Fehler beim Abrufen der Fragen:', error);
		}
	});
</script>

<div>
	<div class="trivia-questions">
		{#each triviaQuestions as question}
			<div class="question-card">
				<p>{question.question}</p>
				<details>
					<summary>Show Answer</summary>
					<p>{question.answer}</p>
				</details>
			</div>
		{/each}
	</div>
</div>

<style>
	.trivia-questions {
		display: flex;
		flex-wrap: wrap;
	}

	.question-card {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
	}
</style>
