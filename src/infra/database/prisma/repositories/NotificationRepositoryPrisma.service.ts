import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationRepositoryPrisma implements NotificationRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        const prismaNotification =
            PrismaNotificationMapper.domainToPrisma(notification);
        await this.prisma.notifications.create({
            data: prismaNotification,
        });
    }
}
