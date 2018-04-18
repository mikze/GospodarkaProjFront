import * as types from '../consts/ActionConsts'

export const setSelectedFile = selectedFile =>
(
    {
        type: types.SELECTED_FILE,
        selectedFile
    }
)

export const setRecJSON = RecJSON =>
(
    {
        type: types.SET_REC_JSON,
        RecJSON
    }
)