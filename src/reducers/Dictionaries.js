import {
    SET_PUBLIC_DICTIONARIES,
    SET_PRIVATE_DICTIONARIES
} from '../actions/types'
import { demoDictionaries } from '../assets/demoDictionaries'

const INITIAL_STATE = {
    publicDictionaries: demoDictionaries,
    privateDictionaries: demoDictionaries
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
        default:
            return state;
    }
}

