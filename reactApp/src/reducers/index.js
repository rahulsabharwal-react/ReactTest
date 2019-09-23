import { combineReducers } from 'redux';
import subscribe from './subscribeReducer';

const rootReducer = combineReducers({
    subscribe
});

export default rootReducer;