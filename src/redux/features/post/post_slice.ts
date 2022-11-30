import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Props {
    id: string;
    title: string;
    content: string;
}

const initialState: Props[] = [
    { id: '1', title: 'Learning Redux Toolkit', content: 'I\'ve heard good things.' },
    { id: '2', title: 'Slices.....', content: 'The more I say slice, the more I want pizza.' },

]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<Props>) => {
                state.push(action.payload);
            },
            prepare: (title: string, content: string, userID) => {
                const id = nanoid();
                return {payload: {id, title, content, userID}}
            }
        }
    }

});

export const selectAllPosts = (state: { posts: Props[]; }) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;