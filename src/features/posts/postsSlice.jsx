import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: "Learning Redux toolkit", content: "This is the state management I hate." },
    { id: 2, title: "Learning Next Js", content: "This is the react framework I love." }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        },
    }
});

export const selectAllPosts = state => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;