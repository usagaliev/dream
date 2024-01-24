import {FC} from 'react';

interface ArtGeneratorBodyProps {
	favorites: string[][];
}

const ArtGeneratorBody: FC<ArtGeneratorBodyProps> = ({favorites}) => {
	return (
		<div className="favorites">
			<h2 className="text-2xl font-bold mb-4">Favorite Compositions</h2>
			<ul>
				{favorites?.map((favorite, index) => (
					<li key={index} className="mb-2">
						{favorite?.map((color, colorIndex) => (
							<span
								key={colorIndex}
								className="favorite-color"
								style={{backgroundColor: color}}
							/>
						))}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ArtGeneratorBody;