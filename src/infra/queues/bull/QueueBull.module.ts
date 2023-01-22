import { NotificationsJobs } from '@app/jobs/NotificationJobs';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@src/infra/database/database.module';
import { LoggerModule } from '@src/infra/util/Logger/logger.module';
import { NotificationsBullJobs } from './jobs/NotificationsBullJob';
import { NotificationBullProcessor } from './processors/NotificationBullProcessor';

@Module({
    imports: [
        BullModule.forRoot({
            redis: {
                host: process.env.QUEUE_HOST,
                port: Number(process.env.QUEUE_PORT),
            },
        }),
        BullModule.registerQueue({
            name: 'notification',
        }),
        DatabaseModule,
        LoggerModule,
    ],
    providers: [
        { provide: NotificationsJobs, useClass: NotificationsBullJobs },
        NotificationBullProcessor,
    ],
    exports: [NotificationsJobs],
})
export class QueueBullModule {}
