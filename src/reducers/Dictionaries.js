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
            return {
                ...state,
                publicDictionaries: action.payload
            }
        case SET_PRIVATE_DICTIONARIES:
            return {
                ...state,
                privateDictionaries: action.payload
            }
        default:
            return state;
    }
}

