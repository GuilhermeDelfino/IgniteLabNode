import { Notification } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';
import { NotificationJobsInMemory } from '@test/jobs/NotificationsJobsInMemory';
import { SendNotification } from './sendNotification';

describe('Use case: Send Notification', () => {
    const queue = new NotificationJobsInMemory();
    it('should be able to send a notification', async () => {
        const useCase = new SendNotification(queue);
        useCase.execute({
            category: Categories.ALERT,
            content: 'Conteudo lindio',
            recipientId: 'new-recipient-id',
        });

        expect(queue.jobs).toHaveLength(1);
        expect(queue.jobs).toEqual(
            expect.arrayContaining([expect.any(Notification)])
        );
    });
});
