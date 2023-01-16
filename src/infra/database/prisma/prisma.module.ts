import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NotificationRepositoryPrisma } from './repositories/NotificationRepositoryPrisma.service';

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationRepository,
            useClass: NotificationRepositoryPrisma,
        },
    ],
    exports: [NotificationRepository],
})
export class PrismaModule {}
