import { Categories, Category } from '.';

describe('Entity: Notification Category', () => {
    it('should be able to create a Category', () => {
        expect(() => Category.of(Categories.ALERT)).toBeTruthy();
        expect(Category.of(Categories.ALERT).value).toBe(Categories.ALERT);
    });
});
