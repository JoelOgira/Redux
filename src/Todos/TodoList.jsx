import { useState } from "react";
import { FaUpload } from 'react-icons/fa';

const TodoList = () => {
    const [ newTodo, setNewTodo ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="w-full py-8 px-6 md:px-8">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 justify-start items-start container mx-auto lg:w-4/6">
                <h1 className="text-2xl font-semibold text-[#d2691e] sm:text-4xl">Todo List</h1>
                <div className="flex space-x-5 w-full border-2 border-[#d2691e] rounded-md p-3">
                    <input
                        type="text"
                        className="w-full p-2 rounded bg-transparent border border-gray-600 focus:outline-none"
                        placeholder="add a new todo item"
                        value={newTodo}
                        onChange={e => setNewTodo(e.target.value)}
                    />
                    <button className="border border-gray-600 px-3 rounded">
                        <FaUpload className="text-[#d2691e]" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoList;