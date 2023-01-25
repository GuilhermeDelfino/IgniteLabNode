import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Module } from '@nestjs/common';
import { LoggerModule } from '@src/infra/util/Logger/logger.module';
import { PrismaService } from './prisma.service';
import { NotificationRepositoryPrisma } from './repositories/NotificationRepositoryPrisma.service';

@Module({
    imports: [LoggerModule],
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
