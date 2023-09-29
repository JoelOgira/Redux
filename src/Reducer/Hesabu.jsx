import { useReducer } from "react";

const Hesabu = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'minus':
                return { ...state, count: state.count - 1 };
            case 'add':
                return { ...state, count: state.count + 1 };
            case 'newUserInput':
                return { ...state, userInput: action.payload };
            case 'reset':
                return { ...state, count: 0, userInput: '' };
            case 'changeColor':
                return { ...state, color: !state.color }
            default:
                throw new Error();
        }
    }

    const ACTION = {
        MINUS: 'minus',
        ADD: 'add',
        NEW_USER_INPUT: 'newUserInput',
        RESET: 'reset',
        CHANGE_COLOR: 'changeColor'
    }

    const [ state, dispatch ] = useReducer(reducer, { count: 0, userInput: '', color: false });

    return (
        <div className="flex flex-col space-y-10 justify-center items-center py-8 text-white lg:w-4/6 lg:container lg:mx-auto">
            <div className="flex flex-col w-1/2">
                <input
                    type="text"
                    className="p-2 rounded focus:outline-none text-black w-full"
                    value={state.userInput}
                    onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
                />

            </div>
            <p className={`${state.color ? 'text-yellow-300' : 'text-white'} text-xl font-semibold`}>Count: {state.count}</p>
            <div className="flex space-x-5 items-center">
                <button onClick={() => dispatch({ type: ACTION.MINUS })} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl font-semibold">
                    <p>-</p>
                </button>
                <button onClick={() => dispatch({ type: ACTION.ADD })} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl font-semibold">
                    <p>+</p>
                </button>
                <button onClick={() => dispatch({ type: ACTION.CHANGE_COLOR })} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl">
                    <p>Color</p>
                </button>
            </div>
            <p className={`${state.color ? 'text-yellow-300' : 'text-white'} max-w-sm text-center font-semibold text-xl`}>{state.userInput}</p>
            <button onClick={() => dispatch({ type: ACTION.RESET })} className="grid content-center gap-x-5 py-1 px-6 rounded bg-slate-800 text-xl">
                <p>Reset</p>
            </button>
        </div>
    )
}

export default Hesabu;