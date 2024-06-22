import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('uiActionCreators', () => {
    it('should create an action to login', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            user: { email, password }
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = {
            type: LOGOUT
        };
        expect(logout()).toEqual(expectedAction);
    });
    it('should create an action to display notification drawer', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER
        };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
    it('should create an action to hide notification drawer', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER
        };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
});