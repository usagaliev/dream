import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ColorSliceState} from "./types";
import {createSelector} from '@reduxjs/toolkit'

const initialState: ColorSliceState = {
	colors: [],
	isButtonToggled: false
};

const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		generateColors: (state, action: PayloadAction<string[]>) => {
			state.colors = action.payload;
		},
		toggleButton: (state) => {
			state.isButtonToggled = !state.isButtonToggled;
		},
	},
});

const selectColorSlice = (state: any) => state.color;

export const selectColors = createSelector(
	selectColorSlice,
	(colorSlice) => colorSlice.colors
);

export const selectTrigger = createSelector(
	selectColorSlice,
	(colorSlice) => colorSlice.isButtonToggled
)

export const {generateColors, toggleButton} = colorSlice.actions;
export default colorSlice.reducer;