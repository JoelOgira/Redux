import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

const newTodoSlice = createSlice({
    name: 'newTodo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        }
    }
});

export const selectAllTodos = (state) => state.newTodo.todos;

export const { addTodo, deleteTodo } = newTodoSlice.actions;

export default newTodoSlice.reducer;