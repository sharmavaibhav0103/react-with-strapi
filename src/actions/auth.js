import api from '../utils/api';
import {
    REGISTER_SUCCESS,
    // REGISTER_FAILURE,
    LOGIN_SUCCESS,
     LOGIN_FAILURE,
    SET_LOADBAR,
    REMOVE_LOADBAR
} from '../actions/types';

export const RegisterUser = formData => async dispatch => {
    try {
        dispatch({
            type: SET_LOADBAR
        });
        const res = await api.post('/auth/local/register', formData);
        localStorage.setItem('token', res.data.jwt);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch({
            type: REMOVE_LOADBAR
        });
        window.location.href = '/chat';
    }
    catch (error) {
        dispatch({
            type: REMOVE_LOADBAR
        });
        error.response.data.message[0].messages
            .forEach(msg => window.alert(msg.message));
    }
}

export const LoginUser = formData => async dispatch => {
    try {
        dispatch({
            type: SET_LOADBAR
        });
        const res = await api.post('/auth/local', formData);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch({
            type: REMOVE_LOADBAR
        });
        window.location.href = '/chat';
    } 
    catch(error){
        dispatch({
            type: REMOVE_LOADBAR
        });
        error.response.data.message[0].messages
            .forEach(msg => window.alert(msg.message));
        dispatch({
            type: LOGIN_FAILURE
        });
    }
}