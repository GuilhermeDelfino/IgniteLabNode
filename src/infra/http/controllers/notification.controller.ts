import {
    UnreadNotification,
    CancelNotification,
    CountNotificationsRecipient,
    GetNotificationsRecipient,
    ReadNotification,
    SendNotification,
} from '@app/useCases';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { SendNotificationDto } from '../dtos/SendNotificationDto';

@Controller('notification')
export class NotificationController {
    constructor(
        private readonly sendNotificationUseCase: SendNotification,
        private readonly readNotificationUseCase: ReadNotification,
        private readonly unreadNotificationUseCase: UnreadNotification,
        private readonly getNotificationsRecipientUseCase: GetNotificationsRecipient,
        private readonly cancelNotificationUseCase: CancelNotification,
        private readonly countNotificationRecipientUseCase: CountNotificationsRecipient
    ) {}

    @ApiParam({
        name: 'notificationId',
        example: 'notification-id',
        required: true,
    })
    @Get('read/:notificationId')
    async readNotification(
        @Param('notificationId')
        notificationId: string
    ) {
        await this.readNotificationUseCase.execute({ notificationId });
    }
    @ApiParam({
        name: 'notificationId',
        example: 'notification-id',
        required: true,
    })
    @Get('unread/:notificationId')
    async unreadNotification(
        @Param('notificationId')
        notificationId: string
    ) {
        await this.unreadNotificationUseCase.execute({ notificationId });
    }
    @Post('send')
    async sendNotification(@Body() body: SendNotificationDto): Promise<void> {
        await this.sendNotificationUseCase.execute(body);
    }
}
