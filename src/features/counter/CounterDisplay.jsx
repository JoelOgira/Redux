import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, reset, addByAmount } from "./counterSlice";

const CounterDisplay = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <div className="flex flex-col space-y-10 justify-center items-center py-8 text-white lg:w-4/6 lg:container lg:mx-auto">
            <div className="flex flex-col w-1/2">
                <input
                    type="text"
                    className="p-2 rounded focus:outline-none text-black w-full"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
            </div>
            <p className={`text-white text-xl font-semibold`}>Count: {count}</p>
            <div className="flex space-x-5 items-center">
                <button onClick={() => dispatch(subtract())} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl font-semibold">
                    <p>-</p>
                </button>
                <button onClick={() => dispatch(add())} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl font-semibold">
                    <p>+</p>
                </button>
                <button onClick={() => dispatch(addByAmount(addValue))} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl font-semibold">
                    <p>Add By</p>
                </button>
            </div>
            <button onClick={resetAll} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl">
                <p>Reset</p>
            </button>
        </div>
    )
}

export default CounterDisplay;