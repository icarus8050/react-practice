import {useDispatch, useSelector} from "react-redux";
import ReduxCounter from "../component/ReduxCounter";
import {decrease, increase} from "../modules/redux-counter";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch();
    return (
        <ReduxCounter number={number}
                      onIncrease={() => dispatch(increase())}
                      onDecrease={() => dispatch(decrease())}
        />
    );
};

export default CounterContainer;
