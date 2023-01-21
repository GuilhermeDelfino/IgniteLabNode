import { Notification } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { NotificationRepositoryInMemory } from '@test/repositories/NotificationRepositoryInMemory';
import { SendNotification } from './sendNotification';

describe('Use case: Send Notification', () => {
    let repo: NotificationRepository;
    beforeEach(() => {
        repo = new NotificationRepositoryInMemory();
    });
    it('should be able to send a notification', async () => {
        const useCase = new SendNotification(repo);
        useCase.execute({
            category: Categories.ALERT,
            content: 'Conteudo lindio',
            recipientId: 'new-recipient-id',
        });

        expect((repo as NotificationRepositoryInMemory).database).toHaveLength(
            1,
        );
        expect((repo as NotificationRepositoryInMemory).database).toEqual(
            expect.arrayContaining([expect.any(Notification)]),
        );
    });
});
