import { findCategoryEnum } from '@app/entities/notification/category';
import {
    CancelNotification,
    CountNotificationsRecipient,
    GetNotificationsRecipient,
    ReadNotification,
    SendNotification,
    UnreadNotification,
} from '@app/useCases';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { SendNotificationDto } from '../dtos/SendNotificationDto';
import { CategoryNotFoundException } from '../errors/CategoryNotFoundException';
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
        example: '99efff0f-a247-417a-9826-09fb2e919317',
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
        example: '99efff0f-a247-417a-9826-09fb2e919317',
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
        example: '99efff0f-a247-417a-9826-09fb2e919317',
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
        example: '99efff0f-a247-417a-9826-09fb2e919317',
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
        example: '99efff0f-a247-417a-9826-09fb2e919317',
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
        const categoryEnum = findCategoryEnum(body.category);
        if (!categoryEnum || categoryEnum === null) {
            throw new CategoryNotFoundException();
        }
        await this.sendNotificationUseCase.execute(body);
    }
}
