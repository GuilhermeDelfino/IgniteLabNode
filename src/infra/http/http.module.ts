import {
    CancelNotification,
    CountNotificationsRecipient,
    GetNotificationsRecipient,
    ReadNotification,
    SendNotification,
    UnreadNotification,
} from '@app/useCases';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { QueueModule } from '../queues/queue.module';
import { NotificationController } from './controllers/notification.controller';

@Module({
    imports: [DatabaseModule, QueueModule],
    controllers: [NotificationController],
    providers: [
        ReadNotification,
        SendNotification,
        CancelNotification,
        CountNotificationsRecipient,
        GetNotificationsRecipient,
        UnreadNotification,
    ],
})
export class HttpModule {}
