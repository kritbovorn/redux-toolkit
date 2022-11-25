import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterSlice';
import { apiSlice } from "../feature/dogs/dog_api_slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;