import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe('notificationActionCreators', () => {
    test('markAsRead action creator', () => {
        const index = 1;
        const action = markAsAread(index);
        expect(action).toEqual({
            type: MARK_AS_READ,
            index,
        });
    });
    test('setNotificationFilter action creator', () => {
        const filter = 'DEFAULT';
        const action = setNotificationFilter(filter);
        expect(action).toEqual({
            type: SET_TYPE_FILTER,
            filter,
        });
    });
});