import {
    SET_RECEIVED_JSON
} from './types'

export const setReceivedJSON = (receivedJSON) =>
    ({
        type: SET_RECEIVED_JSON,
        payload: receivedJSON
    })