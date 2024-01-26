import {FC, useEffect, useRef, useState} from 'react';
// import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import UploadImage from "../UploadImage";

const Scanner: FC = () => {
	const webcamRef = useRef(null) as any;
	const [imageSrc, setImageSrc] = useState(null);
	const [recognizedText, setRecognizedText] = useState('');
	const [files, setFiles] = useState([]);

	const imageToText = async (image: string) => {
		try {
			console.log(image, 'imageSrc');
			const result = await Tesseract.recognize(image, 'rus', {
				logger: info => console.log(info),
			});
			console.log(result, 'result.data');
			setRecognizedText(result.data.text);
		} catch (error) {
			console.error('Ошибка распознавания текста:', error);
		}
	}

	const capture = async () => {
		const imageSrc = webcamRef?.current?.getScreenshot();
		setImageSrc(imageSrc);
		await imageToText(imageSrc);
	};

	// @ts-ignore
	const encodedImage = files?.length && files[0]?.getFileEncodeBase64String()


	useEffect(() => {
		console.log(encodedImage, 'files');
		void imageToText(encodedImage);

	}, [encodedImage]);

	return (
		<div>
			{/*<Webcam*/}
			{/*	audio={false}*/}
			{/*	ref={webcamRef}*/}
			{/*	screenshotFormat="image/jpeg"*/}
			{/*/>*/}
			<button onClick={capture}>Захватить изображение</button>
			{imageSrc && <img src={imageSrc} alt="Captured"/>}
			{recognizedText && <div>Распознанный текст: {recognizedText}</div>}
			<UploadImage files={files} setFiles={setFiles}/>
		</div>
	);
};

export default Scanner;
