import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { createNotification } from '@test/factories/notificationFactory';
import { NotificationRepositoryInMemory } from '@test/repositories/NotificationRepositoryInMemory';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';
import { ReadNotification } from './readNotification';

describe('Use case: Read Notification', () => {
    let repo: NotificationRepository;
    beforeEach(async () => {
        repo = new NotificationRepositoryInMemory();
        await repo.create(createNotification({ id: 'new-id' }));
    });
    it('should be able to Read a notification', async () => {
        const useCase = new ReadNotification(repo);
        await useCase.execute({ notificationId: 'new-id' });
        expect(
            (repo as NotificationRepositoryInMemory).database[0].readedAt
        ).toEqual(expect.any(Date));
    });
    it('should be not able to Read a notification', async () => {
        const useCase = new ReadNotification(repo);
        await expect(
            async () =>
                await useCase.execute({ notificationId: 'new-id-incorrect' })
        ).rejects.toThrow(NotificationNotFoundError);
    });
});
