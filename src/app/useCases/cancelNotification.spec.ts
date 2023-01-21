import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { createNotification } from '@test/factories/notificationFactory';
import { NotificationRepositoryInMemory } from '@test/repositories/NotificationRepositoryInMemory';
import { CancelNotification } from './cancelNotification';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';

describe('Use case: Cancel Notification', () => {
    let repo: NotificationRepository;
    beforeEach(async () => {
        repo = new NotificationRepositoryInMemory();
        await repo.create(createNotification({ id: 'new-id' }));
    });
    it('should be able to Cancel a notification', async () => {
        const useCase = new CancelNotification(repo);
        await useCase.execute({ notificationId: 'new-id' });
        expect(
            (repo as NotificationRepositoryInMemory).database[0].canceledAt
        ).toEqual(expect.any(Date));
    });
    it('should be not able to Cancel a notification', async () => {
        const useCase = new CancelNotification(repo);
        await expect(
            async () =>
                await useCase.execute({ notificationId: 'new-id-incorrect' })
        ).rejects.toThrow(NotificationNotFoundError);
    });
});
