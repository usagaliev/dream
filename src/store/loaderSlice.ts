import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoaderSliceState} from "./types";

const initialState: LoaderSliceState = {
	loading: false,
}

const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

const selectLoaderSlice = (state: any) => state.loader

export const selectLoading = createSelector(selectLoaderSlice, (loaderSlice) => loaderSlice.loading);

export const {setLoading} = loaderSlice.actions;
export default loaderSlice.reducer;