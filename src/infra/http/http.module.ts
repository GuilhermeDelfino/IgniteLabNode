import {
    ReadNotification,
    SendNotification,
    CancelNotification,
    CountNotificationsRecipient,
    GetNotificationsRecipient,
    UnreadNotification,
} from '@app/useCases';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';

@Module({
    imports: [DatabaseModule],
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
