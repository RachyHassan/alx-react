import { createSelector } from 'reselect';

// Selector to get the filter type selected
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get the list of notifications
export const getNotifications = (state) => state.get('notifications');

// Selector to get the list of unread notifications
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.get('isRead'))
);
