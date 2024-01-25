import {FC} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ArtGenerator from '../pages/ArtGenerator';
import DreamComposer from '../components/DreamComposer';
import Navigation from '../components/Navigation';
import {Button} from '@mui/material';
import './index.css';

const App: FC = () => {
	return (
		<Router>
			<div className="App app-body-centered">
				<Navigation>
					<Link to="/">
						<Button sx={{color: '#fff'}}>Home</Button>
					</Link>
					<Link to="/art-generator">
						<Button sx={{color: '#fff'}}>Art Generator</Button>
					</Link>
					<Link to="/dream-composer">
						<Button sx={{color: '#fff'}}>Dream Composer</Button>
					</Link>
				</Navigation>
				<div className='mt-20'>
					<Routes>
						<Route path="art-generator" element={<ArtGenerator/>}/>
						<Route path="dream-composer" element={<DreamComposer/>}/>
						<Route path="/" index element={<div>Hello World!</div>}/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
