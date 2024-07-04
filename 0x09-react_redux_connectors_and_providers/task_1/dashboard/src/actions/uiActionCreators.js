import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from "./uiActionTypes";
// import fetch from 'node-fetch';

export function login(email, password ) {
    return {
    type: LOGIN,
    user: { email, password}
    };
}

export const boundlogin = (email, password) => dispatch(login(email, password));


export function logout (){
    return{
    type: LOGOUT
    };
}

export const boundlogout = () => dispatch(logout());

export function displayNotificationDrawer () {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer () {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());


export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

const loginFaliure = () => ({
    type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN, user: { email, password }});
    try {
        const response = await fetch('/login-success.json');
        if (!response.ok) {
            throw new Error('failed to login');
        }
        dispatch(loginSuccess());
    } catch (error) {
        dispatch(loginFaliure());
    }
};