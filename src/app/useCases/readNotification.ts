import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';
export type ReadNotificationRequest = {
    notificationId: string;
};
export type ReadNotificationResponse = void;
@Injectable()
export class ReadNotification {
    constructor(private repo: NotificationRepository) {}

    async execute(
        request: ReadNotificationRequest,
    ): Promise<ReadNotificationResponse> {
        const { notificationId } = request;
        const notification = await this.repo.findById(notificationId);

        if (!notification || notification === null) {
            throw new NotificationNotFoundError();
        }

        notification.read();

        await this.repo.update(notification);
    }
}
