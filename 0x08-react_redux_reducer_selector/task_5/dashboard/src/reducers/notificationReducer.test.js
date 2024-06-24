import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(fromJS({
            notifications: {},
            filter: 'DEFAULT'
        }));
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', value: 'New data available' }
        ];
        const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
        const expectedState = fromJS({
            filter: 'DEFAULT',
            notifications: {
                1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
                2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
                3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
            }
        });
        expect(notificationReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: {
                1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
                2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
                3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
            }
        });
        const action = { type: MARK_AS_READ, index: 2 };
        const expectedState = initialState.setIn(['notifications', '2', 'isRead'], true);
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: {
                1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
                2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
                3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
            }
        });
        const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
        const expectedState = initialState.set('filter', 'URGENT');
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
});
