import {
    SELECTED_FILE,
    SET_RECEIVED_JSON
} from './types'

export const setSelectedFile = (selectedFile) =>
    ({
        type: SELECTED_FILE,
        payload: selectedFile
    })

export const setReceivedJSON = (receivedJSON) =>
    ({
        type: SET_RECEIVED_JSON,
        payload: receivedJSON
    })