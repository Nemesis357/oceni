import  * as actionTypes from './actions/actionTypes';

const initialState = {
    testValue: "This is a test value!",
    modalActive: false,
    config: {
        user: {
            firstName: "Pera",
            lastName: "Perić"
        },
        mainMenu: {
            controlls: {}
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.TEST_TYPE):
            return {
                ...state,
                testValue: action.payload
            };
        case (actionTypes.SET_CONFIG):
            return {
                ...state,
                config: action.payload
            }
        case (actionTypes.UPDATE_APP_CONFIG): 
            return {
                ...state,
                config: {
                    ...action.payload,
                    user: action.payload.user
                }
            }
        case (actionTypes.MODAL_TOGGLE):
            return {
                ...state,
                modalActive: !state.modalActive
            }
        default:
            // console.log('%c DEFAULT REDUCER', 'color:#bada55;', );
            return state;
    }
}

export default reducer;