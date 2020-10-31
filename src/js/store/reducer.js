import  * as actionTypes from './actions/actionTypes';

const initialState = {
    testValue: "This is a test value!"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.TEST_TYPE):
            return {
                ...state,
                testValue: action.payload
            };
        case ('TEST'):
            return state;
        default:
            // console.log('%c DEFAULT REDUCER', 'color:#bada55;', );
            return state;
    }
}

export default reducer;