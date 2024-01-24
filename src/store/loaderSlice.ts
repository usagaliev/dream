import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
	loading: false,
}

const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			console.log(action, 'action');
			state.loading = action.payload;
		},
	},
});

const selectLoaderSlice = (state: any) => state.loader

export const selectLoading = createSelector(selectLoaderSlice, (loaderSlice) => loaderSlice.loading);


export const {setLoading} = loaderSlice.actions;
export default loaderSlice.reducer;