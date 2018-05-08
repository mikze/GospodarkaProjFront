import { SET_RECEIVED_JSON } from '../actions/types'
import { DemoFile } from '../assets/demoFile'

const INITIAL_STATE = {
    receivedJSON: DemoFile
};

export const FileResult = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_RECEIVED_JSON:
            return { receivedJSON: action.payload }
        default:
            return state;
    }
}

