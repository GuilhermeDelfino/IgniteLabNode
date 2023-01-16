import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundError } from './errors/NotificationNotFoundError';
export type CountNotificationRecipientRequest = {
    recipientId: string;
};
export type CountNotificationRecipientResponse = { count: number };
@Injectable()
export class CountNotificationsRecipient {
    constructor(private repo: NotificationRepository) {}

    async execute(
        request: CountNotificationRecipientRequest
    ): Promise<CountNotificationRecipientResponse> {
        const { recipientId } = request;
        const count = await this.repo.countManyByRecipientId(recipientId);
        return {
            count: count,
        };
    }
}
