import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { createNotification } from '@test/factories/notificationFactory';
import { NotificationRepositoryInMemory } from '@test/repositories/NotificationRepositoryInMemory';
import { CountNotificationsRecipient } from './countNotificationsRecipient';

describe('Use case: Count Notification', () => {
    let repo: NotificationRepository;
    beforeEach(async () => {
        repo = new NotificationRepositoryInMemory();
        await repo.create(createNotification({ recipientId: 'new-id' }));
        await repo.create(createNotification({ recipientId: 'new-id' }));
        await repo.create(createNotification({ recipientId: 'old-id' }));
    });
    it('should be able to Count notifications from a recipientId', async () => {
        const useCase = new CountNotificationsRecipient(repo);
        console.log((repo as NotificationRepositoryInMemory).database);
        const { count } = await useCase.execute({ recipientId: 'new-id' });
        expect(count).toEqual(2);
    });
});
