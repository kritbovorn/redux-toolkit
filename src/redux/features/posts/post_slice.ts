import { createSlice, nanoid, PayloadAction, createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiUrl } from "../../../enum/enum_api";
import axios from "axios";
import { sub } from "date-fns";


export type ReactionState = {
    [key: string]: any;  // $$$ This solved warning : Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
}

export type PostState = {
    id: string,
    title: string,
    body: string,
    userId: string,
    date: string,
    reactions: ReactionState,
}

export type InitailPost = {
    userId: string,
    date?: string,
    title: string,
    body: string,
    reactions?: ReactionState
}

const POST_URL = ApiUrl.posts;

const initialState = {
    // posts: [], // ::::: Error:  Argument of type 'PostState' is not assignable to parameter of type 'never'
    posts: [] as PostState[],   // ::::: Solved
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: ""
}

export let fetchedPosts = createAsyncThunk('posts/fetchedPosts', async () => {

    const response = await axios.get(POST_URL)
    console.log(`41: Post slice: ${response.data}`)
    return response.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: InitailPost) => {
    const response = await axios.post(POST_URL, initialPost);
    return response.data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<PostState>) {
                state.posts.push(action.payload);
            },
            prepare(title: string, body: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost: PostState | undefined = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchedPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchedPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                // Add date() in reactions
                let min = 1;

                const loadedPosts: PostState[] = action.payload.map((post: PostState) => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString() ?? "";
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    }
                    return post;
                });

                // Add any fetchedPost to the Array
                state.posts = state.posts.concat(loadedPosts);

            })
            .addCase(fetchedPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? "";
            })
            .addCase(addNewPost.fulfilled, (state, action: PayloadAction<PostState>) => {
               
                action.payload.userId = action.payload.userId;
            
                action.payload.date = new Date().toISOString();
                action.payload.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
                state.posts.push(action.payload);
            })
    },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectAllPostsStatus = (state: RootState) => state.posts.status;
export const selectAllPostsError = (state: RootState) => state.posts.error;
export const { postAdded, reactionAdded } = postSlice.actions;
export default postSlice.reducer    
