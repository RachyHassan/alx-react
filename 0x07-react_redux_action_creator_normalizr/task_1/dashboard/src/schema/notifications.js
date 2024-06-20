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
    return notificationsData.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

module.exports = {
    getAllNotificationsByUser,
    normalizeData,
};