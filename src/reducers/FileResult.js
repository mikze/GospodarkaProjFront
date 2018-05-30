import { SET_RECEIVED_JSON, SET_RANGE } from '../actions/types'
import _ from 'lodash';

export const FileResult = (state = { receivedJSON: 'nothing' }, action) => {
    switch (action.type) {
        case SET_RECEIVED_JSON:
            return { receivedJSON: action.payload }
        case SET_RANGE:

            const index = _.findIndex(state.receivedJSON, x=>x.filename === action.textName);
            
            state.receivedJSON[index].range.range1 = action.range1;
            state.receivedJSON[index].range.range2 = action.range2;

            return Object.assign([], state);
        
        default:
            return state;
    }
}