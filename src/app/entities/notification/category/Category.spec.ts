import { Categories } from '.';

describe('Entity: Notification Category', () => {
    it('should be able to create a Category', () => {
        expect(() => Categories.ALERT).toBeTruthy();
        expect(Categories.ALERT).toBe('Alert');
    });
});
