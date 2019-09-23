import { expect } from '../test_helper';
import subscribeReducer from '../../src/reducers/subscribeReducer';
import { ActionTypes as types } from '../../src/actions/actionTypes';
import initialState from '../../src/reducers/initialState';

describe('Subscribe Reducer', () => {

    it('handles action with unknown type', () => {
        expect(subscribeReducer(undefined, {})).to.eql(initialState.data);
    });

    it(types.SUBMIT_SUBSCRIBE_FORM_SUCCESS, () => {

        const action = { type: types.SUBMIT_SUBSCRIBE_FORM_SUCCESS, payload: initialState.data};
        let newState = Object.assign({}, initialState.data, {
            "userForm": action.data,
            "status": "success",
            errors: {}
        });
        expect(subscribeReducer(initialState.data, action)).to.eql(newState);

    });

});