import { Notification } from '@app/entities/notification';
import { NotificationsJobs } from '@app/jobs/NotificationJobs';

export class NotificationJobsInMemory extends NotificationsJobs {
    jobs: Notification[] = [];
    async sendNotificationJob(notification: Notification): Promise<void> {
        this.jobs.push(notification);
    }
}
