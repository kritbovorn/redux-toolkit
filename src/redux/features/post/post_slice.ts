import { createSlice } from "@reduxjs/toolkit";

interface Props {
    id: string;
    title: string;
    content: string;
}

const initialState: Props[] = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'I\'ve heard good things.'},
    {id: '2', title: 'Slices.....', content: 'The more I say slice, the more I want pizza.'},
    {id: '3', title: 'Kritbovorn', content: 'My surnam is Taweeyossak'}
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export const selectAllPosts = (state: { posts: Props[]; }) => state.posts;
export default postsSlice.reducer;