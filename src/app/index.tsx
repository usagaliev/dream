import {FC} from 'react';
import ArtGenerator from '../pages/ArtGenerator';
import DreamComposer from "../components/DreamComposer";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './index.css';
import Navigation from "../components/Navigation";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>Hello World!</div>
		),
	},
	{
		path: "/art-generator",
		element: <ArtGenerator/>,
	},
	{
		path: "/dream-composer",
		element: <DreamComposer/>,
	},
]);

const App: FC = () => {
	return (
		<div className="App app-body-centered">
			<Navigation navItems={[
				{path: '/', name: 'Home'},
				{path: '/art-generator', name: 'Art Generator'},
				{path: '/dream-composer', name: 'Dream Composer'},
			]}/>
			<div className='mt-20'>
				<RouterProvider router={router}/>
			</div>
		</div>

	);
};

export default App;
