import { ActionTypes as types } from '../actions/actionTypes';
import initialState from './initialState';

export default function subscribeReducer(state = initialState.data, action) {
    switch (action.type) {
        case types.SUBMIT_SUBSCRIBE_FORM_SUCCESS:
            return Object.assign({}, state, {
                "userForm": action.data,
                "status": "success",
                errors: {}
            });
        case types.SUBMIT_SUBSCRIBE_FORM_ERROR:
            let errors = {};
            action.data.details.forEach((item)=>{
                errors[item.context.key]=item.message;
            });

            return Object.assign({}, state, {
                errors: errors,
                "status": "failed"
            });

        default:
            return state;
    }
}
