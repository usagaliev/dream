import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAnswer, generateDream} from '../../store/dreamSlice';
import {Button} from '@mui/material';
import {dreamGenerator} from "../../features/DreamGenerator.ts";
import {questions} from "../../shared/DreamComposer";

const DreamComposer: React.FC = () => {
	const dispatch = useDispatch();
	const [response, setResponse] = useState<string>('');
	const [dreamWords, setDreamWords] = useState<string | boolean>('');
	const [questionIndex, setQuestionIndex] = useState<number>(0);

	const dreams = useSelector((state: { dream: { dreams: string[] | boolean } }) => state.dream.dreams);

	useEffect(() => {
		setDreamWords((Array.isArray(dreams) && dreams?.length === 4) && dreams.join(', '));
	}, [dreams]);

	useEffect(() => {
		if (!dreamWords) return;
		void dreamGenerator(dreamWords, setResponse);
	}, [dreamWords]);

	const handleAnswer = (answer: string) => {
		dispatch(setAnswer({index: questionIndex, answer}));
		setQuestionIndex(questionIndex + 1);

		if (questionIndex === questions.length - 1) {
			dispatch(generateDream());
		}
	};

	return (
		<div className="dream-composer">
			<h2 className="text-2xl font-bold mb-4">Сочини мечту</h2>
			{questionIndex < questions.length ? (
				<div>
					<p className="mb-2">{questions[questionIndex]}</p>
					<div className="flex space-x-4">
						{['Абсолютно согласен', 'Согласен', 'Нейтрален', 'Не согласен', 'Абсолютно не согласен'].map((option, index) => (
							<Button
								key={index}
								onClick={() => handleAnswer(option)}
								className="btn-answer"
							>
								{option}
							</Button>
						))}
					</div>
				</div>
			) : (
				<div>
					<h4 className="mb-4">Вот мечты, которые мы предлагаем вам помечтать в 2024 году:</h4>
					<p className="font-bold">{response}</p>
				</div>
			)}
		</div>
	);
};

export default DreamComposer;
