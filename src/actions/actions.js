import axios from 'axios';
import {
    SET_RECEIVED_JSON, UPLOAD_FILE
} from './types'

export const setReceivedJSON = (receivedJSON) =>
    ({
        type: SET_RECEIVED_JSON,
        payload: receivedJSON
    })

export const uploadFile = (file) => {
    console.log(file);
    return (dispatch) => {
        const formData = new FormData();
        formData.append('file',file)
        dispatch({ type: UPLOAD_FILE });
        axios({
            method: 'POST',
            url: `http://kacperkluka.me/global/file`,
            data: formData
        }).then(response => {
            console.log(response);
            dispatch({
                type: SET_RECEIVED_JSON,
                payload: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
};