import { createNotification } from '@test/factories/notificationFactory';

describe('Entity: Notification', () => {
    it('should be able to create a notification', () => {
        expect(() => createNotification()).toBeTruthy();
        expect(() => createNotification()).not.toThrow();
    });
    it('should be able to get attributes', () => {
        expect(createNotification().category).toBe('Simple');
        expect(createNotification().content).toBe('content');
        expect(createNotification().recipientId).toBe('recipient-id');
        expect(createNotification().createdAt).toEqual(expect.any(Date));
        expect(createNotification().readAt).toEqual(null);
        expect(createNotification().id).toEqual(expect.any(String));
    });
});
