import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter_slice';

export const store = configureStore({
    reducer: {
        counter:  counterReducer,
    }
});