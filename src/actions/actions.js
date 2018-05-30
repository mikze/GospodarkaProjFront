import axios from 'axios';
import {
    SET_RECEIVED_JSON, 
    SET_PUBLIC_DICTIONARIES,
    SET_PRIVATE_DICTIONARIES,
    SET_RECEIVED_TASK,
    RM_TASK,
    SET_RANGE
} from './types'

export const setReceivedJSON = (receivedJSON) =>
    ({
        type: SET_RECEIVED_JSON,
        payload: receivedJSON
    })

export const setRecivedTask = (recivedTaskString) =>
({
        type: SET_RECEIVED_TASK,
        payload: recivedTaskString.taskId
})


export const removeTask = (taskId) =>
({
        type: RM_TASK,
        payload: taskId
})

export const setRange = (range1, range2, textName) => {

    return (dispatch) => {
 
            dispatch(
                {
                    type: SET_RANGE,
                    range1,
                    range2,
                    textName
            }
            )
        }
    }

export const setTaskId = (file, kind) => {

    return (dispatch) => {
        const formData = new FormData();
        formData.append('file', file);

        axios(
            {
                method: 'POST',
                url: `http://kacperkluka.me/task/${kind}`,
                data: formData,
                headers: {user_details:"test@gmail.com|Jan|Nowak"}
            }
        ).then( response => {
            console.log(response);
            dispatch(
                {
                    type: SET_RECEIVED_TASK,
                    payload: response.data.taskId,
                    fileName: file.name
                }
            )
        }).catch( e => console.log(e));
    }
}

export const getResolvedTask = (taskId) => {
    console.log(taskId);
    return (dispatch) => {

        dispatch({
            type: SET_RECEIVED_JSON,
            payload: 'loading'
        });

        axios({
            method: 'GET',
            url: `http://kacperkluka.me/task/results?id=${taskId}`,
        }).then(response => {
            console.log(response);

            response.data.map(x => x.range = {
                range1: 1,
                range2: Number.MAX_SAFE_INTEGER,
                })

            dispatch({
                type: SET_RECEIVED_JSON,
                payload: response.data
            });
        }).catch(e => console.log(e));
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
        }).catch(e => console.log(e));
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
        }).catch(e => console.log(e));
    }
};