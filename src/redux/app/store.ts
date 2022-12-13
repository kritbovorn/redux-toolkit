import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/post_slice';
import usersReducer from '../features/users/user_slice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;