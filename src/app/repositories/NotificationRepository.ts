import { Notification } from '@app/entities/notification';

export interface NotificationRepository {
    create(notification: Notification): Promise<void>;
}
