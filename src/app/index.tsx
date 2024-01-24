import {FC} from 'react';
import ArtGenerator from '../pages/ArtGenerator';
import DreamComposer from "../components/DreamComposer";

import './index.css';
import Navigation from "../components/Navigation";

const App: FC = () => {

	return (
		<div className="App">
			<Navigation/>
			<ArtGenerator/>
			<DreamComposer />
		</div>
	);
};

export default App;
