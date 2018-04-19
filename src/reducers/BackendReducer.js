import * as types from '../consts/ActionConsts'

const INITIAL_STATE = {
    loading: false,
    data: null
}

export const BackendReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case types.CALL_BACKEND:
            return {
                ...state,
                loading: true,
            };
        case types.CALL_BACKEND_SUCCESS:
            return {
                loading: false,
                data: action.payload
            };
        case types.CALL_BACKEND_FAILURE:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
};
