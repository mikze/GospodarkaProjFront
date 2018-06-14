import axios from 'axios';
import {
    SET_RECEIVED_JSON,
    SET_PUBLIC_DICTIONARIES,
    SET_PRIVATE_DICTIONARIES,
    SET_RECEIVED_TASK,
    RM_TASK,
    SET_RANGE,
    LOADING_START,
    LOADING_FINISH,
    SET_TASK_DICTIONARIES
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

export const setTaskId = (file, kind, dictionaryName) => {
    console.log('file + kind + dictionaryName', file, kind, dictionaryName);
    return (dispatch) => {
        const formData = new FormData();
        formData.append('file', file);
        if (kind !== 'global') {
            formData.append('dictionary_name', dictionaryName);
        }

        axios(
            {
                method: 'POST',
                url: `http://kacperkluka.me/task/${kind}`,
                data: formData,
                headers: { user_details: "test@gmail.com|Jan|Nowak" }
            }
        ).then(response => {
            console.log(response);
            dispatch(
                {
                    type: SET_RECEIVED_TASK,
                    payload: response.data.taskId,
                    fileName: file.name
                }
            )
        }).catch(e => console.log(e));
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

            dispatch({
                type: SET_RECEIVED_JSON,
                payload: response.data
            });
        }).catch(e => console.log(e));
    }
};

export const fetchPublicDictionaries = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_START });
        axios({
            method: 'GET',
            url: `http://kacperkluka.me/public/all`
        }).then(response => {
            dispatch({
                type: SET_PUBLIC_DICTIONARIES,
                payload: response.data
            })
            dispatch({ type: LOADING_FINISH });
        }).catch(e => {
            dispatch({ type: LOADING_FINISH });
            console.log(e)
        });
    }
};

export const fetchPrivateDictionaries = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_START });
        axios({
            method: 'GET',
            url: `http://kacperkluka.me/private/all`
        }).then(response => {
            dispatch({
                type: SET_PRIVATE_DICTIONARIES,
                payload: response.data
            })
            dispatch({ type: LOADING_FINISH });
        }).catch(e => {
            dispatch({ type: LOADING_FINISH });
            console.log(e)
        });
    }
};

export const fetchTaskDictionaries = () => {
    return (dispatch) => {
        dispatch({ type: LOADING_START });
        axios({
            method: 'GET',
            url: `http://kacperkluka.me/task/dictionaries`,
            headers: { user_details: "test@gmail.com|Jan|Nowak" }
        }).then(response => {
            console.log('response', response.data);
            dispatch({
                type: SET_TASK_DICTIONARIES,
                payload: response.data
            })
            dispatch({ type: LOADING_FINISH });
        }).catch(e => {
            dispatch({ type: LOADING_FINISH });
            console.log(e)
        });
    }
};

export const addOpinion = (placeType, placeName, dictionaryName, positive) => {
    console.log('placeType + placeName + dictionaryName + positive', `${placeType} ${placeName} ${dictionaryName} ${positive}`)
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `http://kacperkluka.me/opinion/add`,
            data: {
                userEmail: 'text@gmail.com',
                placeType,
                placeName,
                dictionaryName,
                positive
            }
        }).then().catch((error) => {
            if (error.response) {
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}