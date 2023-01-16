import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';

export class NotificationRepositoryInMemory extends NotificationRepository {
    database: Notification[] = [];
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.database.filter((n) => n.recipientId === recipientId);
    }
    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.database.find((n) => n.id === notificationId);
        if (!notification) return null;
        return notification;
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.database.filter((n) => n.recipientId === recipientId)
            .length;
    }
    async update(notification: Notification): Promise<void> {
        const index = this.database.findIndex((n) => n.id === notification.id);
        if (index >= 0) {
            this.database[index] = notification;
        }
    }
    async create(notification: Notification): Promise<void> {
        this.database.push(notification);
    }
}
