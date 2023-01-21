import { Notification } from '@app/entities/notification';
import { DateFormatter } from '@helpers/date/DateFormatter';

export type NotificationToResponseAllFieldsFormattedResponse = {
    notificationId: string;
    recipientId: string;
    createdAt: string;
    category: string;
    content: string;
    readedAt?: string;
    canceledAt?: string;
};
export class NotificationViewModel {
    static notificationToResponseAllFieldsFormatted(
        notification: Notification,
    ): NotificationToResponseAllFieldsFormattedResponse {
        const {
            canceledAt,
            category,
            content,
            createdAt,
            readedAt,
            recipientId,
            id,
        } = notification;

        return {
            category,
            content,
            createdAt: DateFormatter.formatDateTime(createdAt),
            notificationId: id,
            recipientId,
            canceledAt:
                canceledAt !== null
                    ? DateFormatter.formatDateTime(canceledAt)
                    : '',
            readedAt:
                readedAt !== null ? DateFormatter.formatDateTime(readedAt) : '',
        };
    }
}
