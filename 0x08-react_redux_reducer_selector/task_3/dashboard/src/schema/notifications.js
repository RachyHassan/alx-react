const { schema, normalize } = require('normalizr');
const notificationsData = require('../../../../notifications.json');

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {
    idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

const normalizeData = normalize(notificationsData, [notification]);


function getAllNotificationsByUser(userId) {
    const notifications = normalizeData.entities.notifications;
    const result = [];

    for (const id in notifications) {
        if (notifications[id].author.id === userId) {
            result.push(notifications[id]);
        }
    }
    return (result);
}

module.exports = {
    getAllNotificationsByUser,
    normalizeData,
};