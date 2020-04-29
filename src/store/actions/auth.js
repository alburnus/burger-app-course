import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (tokenId, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: tokenId,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_Qm2F3SNgBmR-VSwUVCUU_1sWtsHkTMY';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_Qm2F3SNgBmR-VSwUVCUU_1sWtsHkTMY'
        }
        axios.post(url, authData)
            .then(response => {
                // idToken, localId are from Firebase response
                // we need .data because response is wrapped by axios
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                // we need .data because response is wrapped by axios
                dispatch(authFail(err.response.data.error));
            })
    };
};