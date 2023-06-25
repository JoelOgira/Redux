import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, count2 } from '../counter2/counterSlice2'

const Counter2 = () => {
    const count = useSelector(count2);
    const dispatch = useDispatch();

    return (
        <div>{count}</div>
    )
}

export default Counter2;