import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAnswer, generateDream, selectDream} from '../../store/dreamSlice';
import {Button, CircularProgress} from '@mui/material';
import {dreamGenerator} from "../../features/DreamGenerator.ts";
import {questions} from "../../shared/DreamComposer";
import {selectLoading, setLoading} from "../../store/loaderSlice.ts";

const DreamComposer: React.FC = () => {
	const dispatch = useDispatch();
	const [response, setResponse] = useState<string>('');
	const [dreamWords, setDreamWords] = useState<string | boolean>('');
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [composingDreams, setComposingDreams] = useState<boolean>(false);

	const dreams = useSelector(selectDream);
	const isLoading = useSelector(selectLoading);

	useEffect(() => {
		setDreamWords((Array.isArray(dreams) && dreams?.length === 4) && dreams.join(', '));
	}, [dreams]);

	useEffect(() => {
		setComposingDreams(isLoading)
	}, [isLoading]);

	useEffect(() => {
		if (!dreamWords) return;
		dispatch(setLoading(true));
		dreamGenerator(dreamWords).then((res) => {
			console.log(res, 'res');
			setResponse(res?.choices[0].text);
			dispatch(setLoading(false))
		})
	}, [dreamWords]);

	const handleAnswer = (answer: string) => {
		dispatch(setAnswer({index: questionIndex, answer}));
		setQuestionIndex(questionIndex + 1);

		if (questionIndex === questions.length - 1) {
			dispatch(generateDream());
		}
	};

	return (
		<div className="flex-col text-center">
			<h2 className="text-2xl font-bold mb-4">Сочини мечту</h2>
			{questionIndex < questions.length ? (
				<div>
					<p className="mb-4">{questions[questionIndex]}</p>
					<div className="flex space-x-2">
						{['Абсолютно согласен', 'Согласен', 'Нейтрален', 'Не согласен', 'Абсолютно не согласен'].map((option, index) => (
							<Button
								key={index}
								onClick={() => handleAnswer(option)}
								variant="contained"
								size="small"
								className="btn-answer border-gray-300"
							>
								{option}
							</Button>
						))}
					</div>
				</div>
			) : (
				<div>

					<h4 className="mb-4">Вот мечты, которые мы предлагаем вам помечтать в 2024 году:</h4>
					<p className="font-bold">
						{composingDreams ? (
							<div className='flex-col'>
								<p>Сочиняем мечту...</p>
								<CircularProgress color="secondary" />
							</div>
						) : response}</p>
				</div>
			)}
		</div>
	);
};

export default DreamComposer;
