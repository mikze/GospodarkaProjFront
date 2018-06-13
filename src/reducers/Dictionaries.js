import {
    SET_PUBLIC_DICTIONARIES,
    SET_PRIVATE_DICTIONARIES,
    SET_TASK_DICTIONARIES
} from '../actions/types'

const INITIAL_STATE = {
    publicDictionaries: null,
    privateDictionaries: null,
    taskDictionaries: null
};

export const Dictionaries = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PUBLIC_DICTIONARIES:
            if (typeof action.payload[0] !== 'undefined' && action.payload[0] !== null) {
                return {
                    ...state,
                    publicDictionaries: action.payload
                }
            }
            return {
                ...state
            }

        case SET_PRIVATE_DICTIONARIES:
            if (typeof action.payload[0] !== 'undefined' && action.payload[0] !== null) {
                return {
                    ...state,
                    privateDictionaries: action.payload
                }
            }
            return {
                ...state
            }
        case SET_TASK_DICTIONARIES:
            console.log("payload", action.payload);
            return {
                ...state,
                taskDictionaries: action.payload
            }

        default:
            return state;
    }
}

