import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';

export class NotificationRepositoryInMemory implements NotificationRepository {
    database: Notification[] = [];
    async create(notification: Notification): Promise<void> {
        this.database.push(notification);
    }
}
