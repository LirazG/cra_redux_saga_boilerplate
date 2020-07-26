import {
    SET_COUNTER_ASYNC,
} from "../actions/types";

import { setCounterAsyncDone } from '../actions/test_actions'

import { call, put, takeEvery } from "redux-saga/effects";

const fakeApiCall = (counterValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (counterValue < -50) {
                reject();
                throw new Error({ err: true, errMsg: 'Error in counter increment' });
            } else {
                resolve();
            }
        }, 1000);
    })

}

export function* setCounterAsync(action) {
    try {
        yield call(fakeApiCall, action.payload);
        yield put(setCounterAsyncDone(action.payload));
        console.log('object')
    } catch {
        console.log('ERROR');
    }
}

export function* watchTestMiddleware() {
    yield takeEvery(SET_COUNTER_ASYNC, setCounterAsync);
}