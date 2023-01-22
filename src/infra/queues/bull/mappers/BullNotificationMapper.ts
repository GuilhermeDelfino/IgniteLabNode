import { Notification } from '@app/entities/notification';

export type StaticAttributesResponse = {
    canceledAt: Date | null;
    createdAt: Date | null;
    readedAt: Date | null;
    recipientId: string;
    category: string;
    content: string;
    id: string;
};
export class BullNotificationMapper {
    static toStaticAttributes(
        notification: Notification
    ): StaticAttributesResponse {
        const {
            category,
            content,
            canceledAt,
            id,
            createdAt,
            readedAt,
            recipientId,
        } = notification;

        return {
            category,
            content,
            canceledAt,
            id,
            createdAt,
            readedAt,
            recipientId,
        };
    }
}
