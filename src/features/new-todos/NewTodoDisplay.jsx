import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./newTodoSlice";

const NewTodoDisplay = () => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.newTodo.todos);

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <section className="flex flex-col space-y-5 sm:flex-row container mx-auto px-4 py-6 sm:space-y-0 sm:space-x-12 lg:w-4/6 md:px-8">
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border
                border-gray-700 focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-900 text-base
                outline-none text-gray-100 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
        </section>
    )
}

export default NewTodoDisplay