import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: "counter/incrementByAmount"; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;