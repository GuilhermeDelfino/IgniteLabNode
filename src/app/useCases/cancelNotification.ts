import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';
export type CancelNotificationRequest = {
    notificationId: string;
};
export type CancelNotificationResponse = void;
@Injectable()
export class CancelNotification {
    constructor(private repo: NotificationRepository) {}

    async execute(
        request: CancelNotificationRequest,
    ): Promise<CancelNotificationResponse> {
        const { notificationId } = request;
        const notification = await this.repo.findById(notificationId);

        if (!notification || notification === null) {
            throw new NotificationNotFoundError();
        }

        notification.cancel();

        await this.repo.update(notification);
    }
}
