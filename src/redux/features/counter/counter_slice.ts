import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Counter {
    value: number
}

const initialState: Counter = {
    value: 0
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
        incrementByAmount: (state: Counter, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }

});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: "counter/incrementByAmount"; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
}

export const selectCount = (state: {counter: Counter}) => state.counter.value;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;