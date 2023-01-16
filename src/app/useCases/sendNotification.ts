import { Notification } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
export type SendNotificationRequest = {
    recipientId: string;
    content: string;
    category: Categories;
};
export type SendNotificationResponse = {
    notification: Notification;
};
export class SendNotification {
    constructor(private repo: NotificationRepository) {}

    async execute(
        request: SendNotificationRequest
    ): Promise<SendNotificationResponse> {
        const { category, content, recipientId } = request;
        const notification = new Notification({
            category,
            content,
            recipientId,
        });
        await this.repo.create(notification);

        return {
            notification,
        };
    }
}
