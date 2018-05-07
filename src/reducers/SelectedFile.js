import * as types from '../actions/types'

export const SelectedFile = (state = {filename: "No Selected file", cities: [], countries: []}, action) =>
{
    switch(action.type)
    {
        case types.SELECTED_FILE:
            console.log(action.selectedFile)
            return Object.assign({}, action.selectedFile);

        default:
        return state;
    }
}