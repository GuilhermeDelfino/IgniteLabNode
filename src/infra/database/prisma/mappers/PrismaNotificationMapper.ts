import { Notification } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';
import { Notifications as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
    static domainToPrisma(notification: Notification): PrismaNotification {
        const {
            category,
            content,
            createdAt,
            id,
            recipientId,
            readedAt,
            canceledAt,
        } = notification;
        return {
            category,
            content,
            createdAt,
            readedAt,
            canceledAt,
            id,
            recipientId,
        };
    }
    static prismaToDomain(notification: PrismaNotification): Notification {
        const {
            category,
            content,
            createdAt,
            id,
            recipientId,
            canceledAt,
            readedAt,
        } = notification;
        return new Notification({
            content,
            recipientId,
            id,
            category: Categories[category],
            createdAt,
            readedAt,
            canceledAt,
        });
    }
}
