import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [ incrementAmount, setIncrementAmount ] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch((reset()));
    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="py-20 px-10">
                <p className='text-center text-3xl py-5'>{count}</p>
                <div className="flex flex-row justify-center mt-5">
                    <button
                        onClick={() => dispatch(increment())}
                        className=' py-2 px-4 text-3xl border rounded mx-2'
                    >+</button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className=' py-2 px-4 text-3xl border rounded mx-2'
                    >-</button>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">

                    <input
                        type="text"
                        className='bg-transparent border rounded mb-5 focus:outline-transparent p-1 w-1/2 text-center text-2xl'
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                    />

                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row items-center justify-center mt-5">
                            <button
                                onClick={() => dispatch(incrementByAmount(addValue))}
                                className=' py-2 px-4 text-2xl border rounded mx-2'
                            >Add</button>
                            <button
                                onClick={resetAll}
                                className=' py-2 px-4 text-2xl border rounded mx-2'
                            >Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter; 