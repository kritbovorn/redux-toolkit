import { createSlice, isAnyOf, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { RootState } from "../../app/store";

export type ReactionState = {
    thumbsUp: number,
    wow: number,
    heart: number,
    rocket: number,
    coffee: number,
    [key: string]: any;  // $$$ This solved warning : Element implicitly has an 'any' type because expression of type 'any' can't be used to index type


}

export type PostState = {
    id: string,
    title: string,
    content: string,
    userId: string,
    date: string,
    reactions: ReactionState,
}


const initialState: PostState[] = [
    {
        id: '1',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        title: 'บอย Learning Redux Toolkit',
        content: 'I have heard good things', userId: "",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        title: 'กฤตบวร ทวียศศักดิ์ Slices.....',
        content: 'The more I say slice, the more I love it', userId: "",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
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
            const existingPost: PostState | undefined = state.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;

            }
        }
    }

});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer    
