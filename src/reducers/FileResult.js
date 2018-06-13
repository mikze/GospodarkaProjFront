import { SET_RECEIVED_JSON } from '../actions/types'

export const FileResult = (state = { receivedJSON: 'nothing' }, action) => {
    switch (action.type) {
        case SET_RECEIVED_JSON:
            return { receivedJSON: action.payload }
        default:
            return state;
    }
}