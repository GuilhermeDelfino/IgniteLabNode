import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { createNotification } from '@test/factories/notificationFactory';
import { NotificationRepositoryInMemory } from '@test/repositories/NotificationRepositoryInMemory';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';
import { UnreadNotification } from './unreadNotification';

describe('Use case: Unread Notification', () => {
    let repo: NotificationRepository;
    beforeEach(async () => {
        repo = new NotificationRepositoryInMemory();
        await repo.create(createNotification({ id: 'new-id' }));
    });
    it('should be able to Unread a notification', async () => {
        const useCase = new UnreadNotification(repo);
        await useCase.execute({ notificationId: 'new-id' });
        expect(
            (repo as NotificationRepositoryInMemory).database[0].readedAt,
        ).toEqual(null);
    });
    it('should be not able to Unread a notification', async () => {
        const useCase = new UnreadNotification(repo);
        expect(
            async () =>
                await useCase.execute({ notificationId: 'new-id-incorrect' }),
        ).rejects.toThrow(NotificationNotFoundError);
    });
});
