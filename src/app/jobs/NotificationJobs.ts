import { Notification } from '@app/entities/notification';

export abstract class NotificationsJobs {
    abstract sendNotificationJob(notification: Notification): Promise<void>;
}
