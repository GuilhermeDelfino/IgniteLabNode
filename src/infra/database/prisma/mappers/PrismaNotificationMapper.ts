import { Notification } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';
import { Notifications as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
    static domainToPrisma(notification: Notification): PrismaNotification {
        const { category, content, createdAt, id, recipientId, readAt } =
            notification;
        return {
            category,
            content,
            createdAt,
            readAt,
            id,
            recipientId,
        };
    }
    static prismaToDomain(notification: PrismaNotification): Notification {
        const { category, content, createdAt, id, recipientId, readAt } =
            notification;
        return new Notification({
            content,
            recipientId,
            id,
            category: Categories[category],
            createdAt,
            readAt,
        });
    }
}
