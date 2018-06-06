import { SET_RECEIVED_JSON, SET_RANGE } from '../actions/types'
import _ from 'lodash';

export const FileResult = (state = { receivedJSON: 'nothing' }, action) => {
    switch (action.type) {
        case SET_RECEIVED_JSON:
            return { receivedJSON: action.payload }
        default:
            return state;
    }
}