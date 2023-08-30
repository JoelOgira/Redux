import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, selectAllTodos } from "./newTodoSlice";
import { FaTrashAlt } from 'react-icons/fa';

const NewTodoDisplay = () => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(selectAllTodos);

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <section className="flex flex-col space-y-8 justify-center container mx-auto items-center mt-12 mb-6 md:w-3/4 md:px-4 lg:w-4/6">
            <form onSubmit={addTodoHandler} className="flex space-x-3 w-full ">
                <input
                    type="text"
                    className="w-full bg-gray-800 rounded border
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
            <ul className="list-none w-full text-white">
                {!todos.length ?
                    <div className="px-4 py-2 bg-zinc-800 rounded">
                        <p>No Todos found! Kindly add some</p>
                    </div>                        
                    :
                    todos.map((todo) => (
                        <li
                            key={todo?.id}
                            className="flex justify-between
                            item-center bg-zinc-800 px-4 py-2 mb-4 rounded"
                        >
                            <div>{todo?.text}</div>
                            <button
                                onClick={() => dispatch(deleteTodo(todo?.id))}
                            >
                                <FaTrashAlt className="text-red-500 hover:text-red-300" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default NewTodoDisplay;