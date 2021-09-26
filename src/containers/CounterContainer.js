import {connect} from "react-redux";
import ReduxCounter from "../component/ReduxCounter";
import {decrease, increase} from "../modules/redux-counter";

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <ReduxCounter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease
    },
)(CounterContainer);
