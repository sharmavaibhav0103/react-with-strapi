import {
    REGISTER_SUCCESS,
    // REGISTER_FAILURE,
    LOGIN_SUCCESS,
    // LOGIN_FAILURE
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null
};

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case REGISTER_SUCCESS: 
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                user: payload.user
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                user: payload.user
            };

        default: return state;
    }
}