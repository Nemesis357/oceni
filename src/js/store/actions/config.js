import * as actionTypes from './actionTypes';

export const updateAppConfig = payload => {
    console.log('%c *-*-* UPDATE_APP_CONFIG *-*-*', 'color:#bada55;', payload);
    return dispatch => {
        setTimeout(() => {
            dispatch(updateConfig(payload))        
        }, 3000);
    }
}


const updateConfig = payload => {
    return {
        type: actionTypes.UPDATE_APP_CONFIG,
        payload
    }
}