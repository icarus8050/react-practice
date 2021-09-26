import {connect} from "react-redux";
import ReduxCounter from "../component/ReduxCounter";
import {increase, decrease} from "../modules/redux-counter";

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <ReduxCounter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);
