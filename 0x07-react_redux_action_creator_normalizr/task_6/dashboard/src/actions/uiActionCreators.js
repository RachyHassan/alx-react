import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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
    return{
    type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export const displayNotificationDrawer = () => dispatch(displayNotificationDrawer());


export function hideNotificationDrawer () {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

export const hideNotificationDrawer = () => dispatch(hideNotificationDrawer());