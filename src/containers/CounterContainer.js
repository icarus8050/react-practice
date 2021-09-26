import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ReduxCounter from "../component/ReduxCounter";
import {decrease, increase} from "../modules/redux-counter";

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
    state => ({
        number: state.counter.number,
    }),
    dispatch =>
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch
        )
)(CounterContainer);
