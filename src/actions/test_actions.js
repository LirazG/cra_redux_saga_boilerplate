
import {
    SET_COUNTER,
    SET_COUNTER_ASYNC,
    SET_COUNTER_ASYNC_DONE,
} from './types';

// regular actions
export function setCounter(value) {
    return { type: SET_COUNTER, payload: value };
}

export function setCounterAsync(value) {
    return { type: SET_COUNTER_ASYNC, payload: value };
}

// sagas actions
export function setCounterAsyncDone(value) {
    return { type: SET_COUNTER_ASYNC_DONE, payload: value };
}