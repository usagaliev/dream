import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import dreamReducer from './dreamSlice';
import loaderSliceReducer from './loaderSlice';

const store = configureStore({
	reducer: {
		color: colorReducer,
		dream: dreamReducer,
		loader: loaderSliceReducer,
	},
});

export default store;