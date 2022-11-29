import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number
};

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: { counter: { value: any; }; }) => state.counter.value;
export default counterSlice.reducer;

export const incrementAsync = (amount: any) => (dispatch: (arg0: { payload: any; type: "counter/incrementByAmount"; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 2000);
}



