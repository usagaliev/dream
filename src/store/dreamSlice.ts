import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {answerOptions, answerVariants} from "../shared/DreamComposer";
import {DreamSliceState} from "./types";

const initialState: DreamSliceState = {
	answers: [],
	dream: [],
};

const processAnswers = (answers: string[]): string[] => {
	const [q1, q2, q3, q4] = answers;

	return [
		answerVariants[0][answerOptions[0].indexOf(q1)],
		answerVariants[1][answerOptions[1].indexOf(q2)],
		answerVariants[2][answerOptions[2].indexOf(q3)],
		answerVariants[3][answerOptions[3].indexOf(q4)],
	]
};


const dreamSlice = createSlice({
	name: 'dream',
	initialState,
	reducers: {
		setAnswer: (state, action: PayloadAction<{ index: number; answer: string }>) => {
			state.answers[action.payload.index] = action.payload.answer;
		},
		generateDream: (state) => {
			state.dream = processAnswers(state.answers);
		},
	},
});

const selectDreamSlice = (state: any) => state.dream;

export const selectAnswers = createSelector(
	selectDreamSlice,
	(dreamSlice) => dreamSlice.answers
);

export const selectDream = createSelector(
	selectDreamSlice,
	(dreamSlice) => dreamSlice.dream
);


export const { setAnswer, generateDream } = dreamSlice.actions;
export default dreamSlice.reducer;
