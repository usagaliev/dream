import {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import ArtGeneratorBtn from "../../components/ArtGeneratorBtn";
import ArtGeneratorBody from "../../components/ArtGeneratorBody";
import {selectColors, selectTrigger} from "../../store/colorSlice.ts";

const ArtGenerator: FC = () => {
	const colors = useSelector(selectColors) as string[];
	const toggled = useSelector(selectTrigger)


	const [favorites, setFavorites] = useState<string[][]>([]);
	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites');

		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites));
		}
	}, [toggled, colors]);
	return (
		<div className="art-generator">
			<h1 className="text-3xl font-bold mb-6">Abstract Art Generator</h1>
			<ArtGeneratorBtn/>
			<ArtGeneratorBody favorites={favorites} />
		</div>
	);
};

export default ArtGenerator;