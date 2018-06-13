import {
    LOADING_START,
    LOADING_FINISH
} from '../actions/types'


export const Loading = (state = false, action) => {
    switch (action.type) {
        case LOADING_START:
            return true;
        case LOADING_FINISH:
            return false;
        default:
            return state;
    }
}

