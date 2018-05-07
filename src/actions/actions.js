import {
    SELECTED_FILE,
    SET_REC_JSON
} from './types'

export const setSelectedFile = (selectedFile) =>
    ({
        type: SELECTED_FILE,
        selectedFile
    })

export const setRecJSON = (RecJSON) =>
    ({
        type: SET_REC_JSON,
        RecJSON
    })