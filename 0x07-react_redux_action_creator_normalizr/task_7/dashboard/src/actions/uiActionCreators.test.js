import { login, logout, hideNotificationDrawer, displayNotificationDrawer, loginRequest } from "./uiActionCreators";
import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from "./uiActionTypes";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

    afterEach(() => {
        fetchMock.restore();
    });

    it('dispatch LOGIN_SUCCESS when login API succeeds', () => {
        fetchMock.getOnce('/login-success.json', {user: 'testUser'});

        const expectedActions = [
            {type: LOGIN, user: { email: 'test@test.com', password: 'password'}},
            { type: LOGIN_SUCCESS }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('dispatches LOGIN_FAILURE when login API fails', () => {
        fetchMock.getOnce('/login-success.json', 500); // Simulate failure
    
        const expectedActions = [
          { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
          { type: LOGIN_FAILURE }
        ];
    
        const store = mockStore({});
    
        return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
});