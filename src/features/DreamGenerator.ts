import axios from 'axios';

export const dreamGenerator = async (dreamWords: string | boolean) => {
	try {
		const response = await axios.post(
			'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions',
			{
				prompt: `Give 4 things to dream of in 2024. Create dreams according to these 4 things I love: ${dreamWords}. Write it in list of 4 items in 3 words in Russian. One item should contain 3 words max and should start with -`,
				max_tokens: 80,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer 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`,
				},
			}
		);
		return response.data
	} catch (error) {
		console.error('Error:', error);
	}
};