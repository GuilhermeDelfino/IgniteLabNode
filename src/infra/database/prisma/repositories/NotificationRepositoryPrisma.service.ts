import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundException } from '@src/infra/http/errors/NotificationNotFoundException';
import { Logger } from '@src/infra/util/Logger/Logger';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationRepositoryPrisma extends NotificationRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly logger: Logger
    ) {
        super();
    }

    async findById(notificationId: string): Promise<Notification> {
        this.logger.log(`find notification by id = ${notificationId}`);
        const notification = await this.prisma.notifications.findFirst({
            where: { id: notificationId },
        });
        if (!notification || notification === null) {
            throw new NotificationNotFoundException();
        }
        return PrismaNotificationMapper.prismaToDomain(notification);
    }

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        this.logger.log(`find notifications by recipientId = ${recipientId}`);
        const notifications = await this.prisma.notifications.findMany({
            where: {
                recipientId,
            },
        });
        return notifications.map(PrismaNotificationMapper.prismaToDomain);
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        this.logger.log(`count notification by recipient id = ${recipientId}`);
        const count = await this.prisma.notifications.count({
            where: { recipientId },
        });

        return count;
    }

    async update(notification: Notification): Promise<void> {
        this.logger.log(`update notification with id = ${notification.id}`);
        await this.prisma.notifications.update({
            where: {
                id: notification.id,
            },
            data: PrismaNotificationMapper.domainToPrisma(notification),
        });
    }

    async create(notification: Notification): Promise<void> {
        this.logger.log('create notification: ');
        this.logger.log(notification);

        const prismaNotification =
            PrismaNotificationMapper.domainToPrisma(notification);
        await this.prisma.notifications.create({
            data: prismaNotification,
        });
    }
}
