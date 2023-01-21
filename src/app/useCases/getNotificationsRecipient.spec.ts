import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { createNotification } from '@test/factories/notificationFactory';
import { NotificationRepositoryInMemory } from '@test/repositories/NotificationRepositoryInMemory';
import { GetNotificationsRecipient } from './getNotificationsRecipient';

describe('Use case: Get Notification', () => {
    let repo: NotificationRepository;
    beforeEach(async () => {
        repo = new NotificationRepositoryInMemory();
        await repo.create(createNotification({ recipientId: 'new-id' }));
        await repo.create(createNotification({ recipientId: 'new-id' }));
        await repo.create(createNotification({ recipientId: 'old-id' }));
    });
    it('should be able to Get notifications from a recipientId', async () => {
        const useCase = new GetNotificationsRecipient(repo);
        const { notificationsByRecipient } = await useCase.execute({
            recipientId: 'new-id',
        });
        expect(notificationsByRecipient).toHaveLength(2);
        expect(notificationsByRecipient).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ recipientId: 'new-id' }),
                expect.objectContaining({ recipientId: 'new-id' }),
            ]),
        );
    });
});
