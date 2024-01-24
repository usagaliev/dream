import axios from 'axios';
import {SetStateAction} from 'react';

export const dreamGenerator = async (dreamWords: string | boolean, setResponse: {
	(response: SetStateAction<string>): void;
	(arg0: any): void;
}) => {
	try {
		const response = await axios.post(
			'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions',
			{
				prompt: `Give 4 things to dream of in 2024. Create dreams according to these 4 things I love:
						${dreamWords}. Write it in list of 4 items in 3 words in Russian. One item should contain 3 words max`,
				max_tokens: 80,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer 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`,
				},
			}
		);
		setResponse(response.data.choices[0].text);
	} catch (error) {
		console.error('Error:', error);
	}
};