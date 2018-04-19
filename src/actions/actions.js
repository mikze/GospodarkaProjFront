import * as types from '../consts/ActionConsts'
import axios from 'axios';

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


export const callBackend = () => {
    console.log("DUPA");
    return (dispatch) => {
        dispatch({
            type: types.CALL_BACKEND
        });
        axios.get('http://localhost:8080/test')
            .then(response => {
                console.log(response);
                dispatch({
                    type: types.CALL_BACKEND_SUCCESS,
                    payload: response
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: types.CALL_BACKEND_FAILURE
                })
            })
    }
}