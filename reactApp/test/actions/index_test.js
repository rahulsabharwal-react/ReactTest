import { expect } from '../test_helper';

import { ActionTypes as types } from '../../src/actions/actionTypes';
import * as subscribeActions from '../../src/actions/subscribeActions';
import initialState from '../../src/reducers/initialState';

describe('actions', () => {
    describe('subscribeActions', () => {
        it('success has the correct type', () => {

            const action = subscribeActions.submitSubscribeFormSuccess();
            expect(action.type).to.equal(types.SUBMIT_SUBSCRIBE_FORM_SUCCESS);
        });

        it('success has the correct payload', () => {

             const action = subscribeActions.submitSubscribeFormSuccess(initialState.data);
             expect(action.data).to.equal(initialState.data);
        });

        it('error has the correct type', () => {

            const action = subscribeActions.submitSubscribeFormError();
            expect(action.type).to.equal(types.SUBMIT_SUBSCRIBE_FORM_ERROR);
        });

        it('error has the correct payload', () => {

             const action = subscribeActions.submitSubscribeFormError(initialState.data);
             expect(action.data).to.equal(initialState.data);
        });
    });

});