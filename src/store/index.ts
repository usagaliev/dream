import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import dreamReducer from './dreamSlice';

const store = configureStore({
	reducer: {
		color: colorReducer,
		dream: dreamReducer,
	},
});

export default store;