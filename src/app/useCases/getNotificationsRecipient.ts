import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
export type GetNotificationRecipientRequest = {
    recipientId: string;
};
export type GetNotificationRecipientResponse = {
    notificationsByRecipient: Notification[];
};
@Injectable()
export class GetNotificationsRecipient {
    constructor(private repo: NotificationRepository) {}
    async execute(
        request: GetNotificationRecipientRequest,
    ): Promise<GetNotificationRecipientResponse> {
        const { recipientId } = request;
        const notifications = await this.repo.findManyByRecipientId(
            recipientId,
        );
        return {
            notificationsByRecipient: notifications,
        };
    }
}
