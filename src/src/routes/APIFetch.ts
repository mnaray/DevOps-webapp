export interface Question {
	category: string;
	question: string;
	answer: string;
}

export async function APIFetch(apiKey: string, category: string) {
	try {
		const response = await fetch(
			`https://api.api-ninjas.com/v1/trivia?category=${category}&limit=10`,
			{
				headers: {
					'X-Api-Key': apiKey
				}
			}
		);
		const data: Question[] = await response.json();
		return data;
	} catch (error) {
		console.error('Fehler beim Abrufen der Fragen:', error);
	}
}
