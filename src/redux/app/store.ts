import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/post_slice';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});