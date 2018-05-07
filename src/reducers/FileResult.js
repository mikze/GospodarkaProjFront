import * as types from '../actions/types'
import { DemoFile } from '../assets/demoFile'


export const FileResult = (state = DemoFile, action) => {
    switch (action.type) {
        case types.SET_REC_JSON:
            return Object.assign([], action.RecJSON);

        default:
            return state;
    }
}

