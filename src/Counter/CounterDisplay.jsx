import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

const CounterDisplay = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [ incrementAmount, setIncrementAmount ] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <div className="flex flex-col space-y-5 px-8 container mx-auto justify-center items-center py-8 md:w-4/6 h-1/2">
            <div className="flex flex-col justify-center items-center">
                <p className="text-center">Count: {count}</p>
                <div className="flex space-x-5">
                    <button
                        className=""
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>

                    <button
                        className=""
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                </div>

                <input
                    type="text"
                    className=""
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <div className="flex space-x-5">
                    <button
                        className=""
                        onClick={() => dispatch(incrementByAmount(addValue))}
                    > Add Amount</button>

                    <button 
                        onClick={resetAll}
                    >
                        Reset
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CounterDisplay;