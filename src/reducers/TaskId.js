import { SET_RECEIVED_TASK, RM_TASK } from '../actions/types'
import _ from 'lodash'

export const TaskId = (state = [], action) => {
    switch (action.type) {
        case SET_RECEIVED_TASK:
            return Object.assign([], [
                ...state,
                { 
                    taskId: action.payload,
                    fileName: action.fileName
                }
            ]);
        case RM_TASK:

        return _.filter(state, x => x.taskId !== action.payload);

        default:
            return state;
    }
}

