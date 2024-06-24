import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export function markAsAread(index) {
    return {
    type: MARK_AS_READ,
    index
    };
}

export const boundmarkAsRead = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter){
    return {
        type: SET_TYPE_FILTER,
        filter
    };
}

export const boundsetNotificationFilter = (index) => dispatch(setNotificationFilter(index));

export function fetchNotificationSuccess(filter){
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        filter
    };
}