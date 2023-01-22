import { Notification } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';
import { NotificationsJobs } from '@app/jobs/NotificationJobs';
import { Injectable } from '@nestjs/common';

export type SendNotificationRequest = {
    recipientId: string;
    content: string;
    category: Categories;
};
export type SendNotificationResponse = {
    notification: Notification;
};
@Injectable()
export class SendNotification {
    constructor(private jobs: NotificationsJobs) {}

    async execute(
        request: SendNotificationRequest
    ): Promise<SendNotificationResponse> {
        const { category, content, recipientId } = request;
        const notification = new Notification({
            category,
            content,
            recipientId,
        });

        await this.jobs.sendNotificationJob(notification);

        return {
            notification,
        };
    }
}
