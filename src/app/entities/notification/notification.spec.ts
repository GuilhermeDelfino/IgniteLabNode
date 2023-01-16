import { createNotification } from '@test/factories/notificationFactory';

describe('Entity: Notification', () => {
    it('should be able to create a notification', () => {
        expect(() => createNotification()).toBeTruthy();
        expect(() => createNotification()).not.toThrow();
    });
});
