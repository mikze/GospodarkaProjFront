import axios from 'axios';
import {
    SET_RECEIVED_JSON, 
    SET_PUBLIC_DICTIONARIES,
    SET_PRIVATE_DICTIONARIES
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
        formData.append('file', file)
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

export const fetchPublicDictionaries = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `http://kacperkluka.me/public/all`
        }).then(response => {
            dispatch({
                type: SET_PUBLIC_DICTIONARIES,
                payload: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }
};

export const fetchPrivateDictionaries = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `http://kacperkluka.me/private/all`
        }).then(response => {
            dispatch({
                type: SET_PRIVATE_DICTIONARIES,
                payload: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }
};