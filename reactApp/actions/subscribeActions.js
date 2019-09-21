 import { ActionTypes as types } from './actionTypes';
 import SubscribeAPI from './../api/subscribeAPI';


export function submitSubscribeFormSuccess(data) {
    return { type: types.SUBMIT_SUBSCRIBE_FORM_SUCCESS, data };
}
export function submitSubscribeFormError(data) {
    return { type: types.SUBMIT_SUBSCRIBE_FORM_ERROR, data };
}

export function SubmitSubscribeForm(userForm) {
    return async (dispatch) => {
        try {
            const res = await SubscribeAPI.submitSubscribeForm(userForm);
            dispatch(submitSubscribeFormSuccess(res.data));
        }
        catch (error) {
            dispatch(submitSubscribeFormError(error.response.data));
        }
    };
}