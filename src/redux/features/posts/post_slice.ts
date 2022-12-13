import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type PostState = {
    id: string,
    title: string,
    content: string
};

const initialState: PostState[] = [
    { id: '1', title: 'บอย Learning Redux Toolkit', content: 'I have heard good things' },
    { id: '2', title: 'กฤตบวร ทวียศศักดิ์ Slices.....', content: 'The more I say slice, the more I love it' }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<PostState>) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer    
