<script lang="ts">
	import { onMount } from 'svelte';
	import { APIFetch } from './APIFetch';
	import type { Question } from './APIFetch';
	// eslint-disable-next-line
	let triviaQuestions: Question[] = [];
	onMount(async () => {
		const category = 'general';
		const apiKey = '';
		const response = await APIFetch(apiKey, category);
		if (triviaQuestions === undefined) {
			throw new Error('No questions found');
		} else {
			triviaQuestions = response as Question[];
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
