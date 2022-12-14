import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/user_slice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});