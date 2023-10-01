import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    { id: "1", title: "Learning Redux Toolkit", content: "Just some random stuff", date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 } },
    { id: "2", title: "Learning Authentication", content: "This is authorization", date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 }},
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, userId, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        userId,
                        content,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;