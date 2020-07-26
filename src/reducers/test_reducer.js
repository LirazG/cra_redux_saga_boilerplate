import {
    SET_COUNTER,
    SET_COUNTER_ASYNC_DONE,
} from '../actions/types';

const initialState = {
    counter: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_COUNTER:
            return { ...state, counter: action.payload }
        case SET_COUNTER_ASYNC_DONE:
            return { ...state, counter: action.payload }
        default:
            return state;
    }
}