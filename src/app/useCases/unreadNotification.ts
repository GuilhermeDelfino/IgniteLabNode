import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';

export type UnreadNotificationRequest = {
    notificationId: string;
};
export type UnreadNotificationResponse = void;
@Injectable()
export class UnreadNotification {
    constructor(private repo: NotificationRepository) {}

    async execute(
        request: UnreadNotificationRequest
    ): Promise<UnreadNotificationResponse> {
        const { notificationId } = request;
        const notification = await this.repo.findById(notificationId);

        if (!notification || notification === null) {
            throw new NotificationNotFoundError();
        }

        notification.unread();

        await this.repo.update(notification);
    }
}
