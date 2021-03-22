import { auth } from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return { 
                ...state,
                initialized: action.initialized
            };
        }
        default: {
            return state;
        }
    }
};

const setInitialized = () => ({ type: SET_INITIALIZED, initialized: true});


export const initialize = () => {
    return (dispatch) => {
       dispatch(auth()).then(() => {
           dispatch(setInitialized());
       });
    }
}

export default appReducer;