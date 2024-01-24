import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import randomcolor from 'randomcolor';
import { Button } from '@mui/material';
import {toggleButton, generateColors, selectColors} from '../../store/colorSlice.ts'

const ArtGenerator: React.FC = () => {
	const dispatch = useDispatch();
	const colors = useSelector(selectColors) as string[];
	const newColors = Array.from({ length: 25 }, () => randomcolor());
	const generateArt = () => {
		dispatch(generateColors(newColors));
	};
	const [favorites, setFavorites] = useState<string[][]>([]);

	const saveFavorite = () => {
		setFavorites((prevFavorites) => [...prevFavorites, colors]);
		localStorage.setItem('favorites', JSON.stringify(favorites));
		dispatch(toggleButton())
	};

	const resetFavorites = () => {
		setFavorites([]);
		localStorage.setItem('favorites', JSON.stringify([]));
		dispatch(generateColors([]));
	}

	return (
		<div className="art-generator">
			<Button onClick={generateArt} className="btn-generate">
				Generate Art
			</Button>
			<Button onClick={saveFavorite} className="btn-save">
				Save as Favorite
			</Button>
			<Button onClick={resetFavorites} className="btn-reset">
				Reset Favorites
			</Button>
			<div className="art-canvas">
				{colors.map((color, index) => (
					<div key={index} style={{ backgroundColor: color }}></div>
				))}
			</div>
		</div>
	);
};

export default ArtGenerator;
