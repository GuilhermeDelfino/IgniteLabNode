import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundException } from '@src/infra/http/errors/NotificationNotFoundException';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationRepositoryPrisma implements NotificationRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findById(notificationId: string): Promise<Notification> {
        const notification = await this.prisma.notifications.findFirst({
            where: { id: notificationId },
        });
        if (!notification || notification === null) {
            throw new NotificationNotFoundException();
        }
        return PrismaNotificationMapper.prismaToDomain(notification);
    }
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notifications.findMany({
            where: {
                recipientId,
            },
        });
        return notifications.map(PrismaNotificationMapper.prismaToDomain);
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notifications.count({
            where: { id: recipientId },
        });

        return count;
    }
    async update(notification: Notification): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async create(notification: Notification): Promise<void> {
        const prismaNotification =
            PrismaNotificationMapper.domainToPrisma(notification);
        await this.prisma.notifications.create({
            data: prismaNotification,
        });
    }
}
