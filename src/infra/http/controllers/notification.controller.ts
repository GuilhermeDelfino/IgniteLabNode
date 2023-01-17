import {
    UnreadNotification,
    CancelNotification,
    CountNotificationsRecipient,
    GetNotificationsRecipient,
    ReadNotification,
    SendNotification,
} from '@app/useCases';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { SendNotificationDto } from '../dtos/SendNotificationDto';
import { NotificationViewModel } from '../view-models/notificationViewModel';

@Controller('notification')
@ApiTags('Notification')
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
        name: 'recipientId',
        example: 'recipient-id',
        required: true,
    })
    @Get('recipient/:recipientId/findAll')
    async findAllByRecipient(
        @Param('recipientId')
        recipientId: string
    ) {
        const notifications =
            await this.getNotificationsRecipientUseCase.execute({
                recipientId,
            });

        return notifications.notificationsByRecipient.map(
            NotificationViewModel.notificationToResponseAllFieldsFormatted
        );
    }
    @ApiParam({
        name: 'recipientId',
        example: 'recipient-id',
        required: true,
    })
    @Get('recipient/:recipientId/count')
    async countNotificationsRecipient(
        @Param('recipientId')
        recipientId: string
    ) {
        return await this.countNotificationRecipientUseCase.execute({
            recipientId,
        });
    }
    @ApiParam({
        name: 'notificationId',
        example: 'notifications-id',
        required: true,
    })
    @Patch('cancel/:notificationId')
    async cancelNotification(
        @Param('notificationId')
        notificationId: string
    ) {
        await this.cancelNotificationUseCase.execute({
            notificationId,
        });
    }
    @ApiParam({
        name: 'notificationId',
        example: 'notification-id',
        required: true,
    })
    @Patch('read/:notificationId')
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
    @Patch('unread/:notificationId')
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
