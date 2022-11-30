import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/post_slice';
import usersReducer from '../features/user/user_slice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
});