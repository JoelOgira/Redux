import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/Users/userSlice';
import counterReducer2 from '../features/counter2/counterSlice2'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
        counter3: counterReducer2,
    }
})