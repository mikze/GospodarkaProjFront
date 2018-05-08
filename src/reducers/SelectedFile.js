import { SELECTED_FILE } from '../actions/types'

const INITIAL_STATE = {
    filename: "No selected file",
    cities: [],
    countries: []
};
export const SelectedFile = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_FILE:
            return action.payload
        default:
            return state;
    }
}