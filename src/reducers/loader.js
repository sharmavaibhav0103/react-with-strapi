import {
    SET_LOADBAR,
    REMOVE_LOADBAR
} from '../actions/types';

const initialState = {
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_LOADBAR: 
            return {
                ...state,
                loading: true
            };
        case REMOVE_LOADBAR: 
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
}