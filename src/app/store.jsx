import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Counter/counterSlice';
import postsReducer from '../posts/postsSlice';
import usersReducer from '../users/usersSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
});

