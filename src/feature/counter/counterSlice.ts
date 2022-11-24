import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface CounterState {
    value: number
};

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    initialState: initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value  += action.payload;
        }
    }
});

export const { increment, decrement, amountAdded} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;