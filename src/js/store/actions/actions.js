import * as actionTypes from './actionTypes';

export const typeTestChange = (value) => {
    return {
        type: actionTypes.TEST_TYPE,
        payload: value
    }
}

export const changeTestType = (payload) => {
    return dispatch => {
        setTimeout(() => {
            console.log('%c Change test type', 'color:#bada55;', payload);
            dispatch(typeTestChange(payload))
        }, 2000)
    }
}
// CONFIG UPDATE


// return {
//     type: actionTypes.UPDATE_APP_CONFIG,
//     payload
// }