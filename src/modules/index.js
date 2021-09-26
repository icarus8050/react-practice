import {combineReducers} from "redux";
import counter from './redux-counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
