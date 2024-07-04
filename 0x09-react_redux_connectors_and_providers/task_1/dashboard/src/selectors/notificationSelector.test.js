import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]
  });

  it('should return the filter type selected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('should return the list of notifications', () => {
    const expectedNotifications = fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]);
    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('should return the list of unread notifications', () => {
    const expectedUnreadNotifications = fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]);
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
